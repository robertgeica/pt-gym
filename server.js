const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

var multer = require('multer');
var GridFsStorage = require('multer-gridfs-storage');
var Grid = require('gridfs-stream');

// Connect database
// const db = process.env.MONGODB_URI || 'mongodb://127.0.0.1/mdgym';
// var dbRef;

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		});

		// console.log(dbRef);
		console.log('Database connected ...');
		return mongoose.connection.db;
	} catch (error) {
		console.log(`Error ${error.message}`);
		process.exit(1);
	}
	// console.log(mongoose.connection);
	// return dbRef = await mongoose.connection.db;
};
// connectDB();

// Apply Middlewares
app.use(cors());
app.use(express.json({ extended: false }));

// Define routes
app.use('/auth', require('./routes/api/auth'));
app.use('/register', require('./routes/api/register'));
// app.use('/upload', require('./routes/api/upload'));
app.use('/post', require('./routes/api/post'));

mongoose.connect('mongodb://127.0.0.1/mdgym');
var conn = mongoose.connection;
var multer = require('multer');
var GridFsStorage = require('multer-gridfs-storage');
var Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
var gfs = Grid(conn.db);

/** Seting up server to accept cross-origin browser requests */
app.use(function(req, res, next) { //allow cross origin requests
  next();
});

app.use(cors());

/** Setting up storage using multer-gridfs-storage */
var storage = GridFsStorage({
  gfs : gfs,
  filename: function (req, file, cb) {
    var datetimestamp = Date.now();
    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
  },
  /** With gridfs we can store aditional meta-data along with the file */
  metadata: function(req, file, cb) {
    cb(null, { originalname: file.originalname});
  },
  root: 'ctFiles' //root name for collection to store files into
});

var upload = multer({ //multer settings for single upload
  storage: storage
}).single('file');

/** API path that will upload the files */
app.post('/upload', function(req, res) {
  upload(req,res,function(err){
    if(err){
      res.json({error_code:1,err_desc:err});
      return;
    }
    res.json({error_code:0,err_desc:null});
  });
});

app.get('/file/:filename', function(req, res){
  gfs.collection('ctFiles'); //set collection name to lookup into

  /** First check if file exists */
  gfs.files.find({filename: req.params.filename}).toArray(function(err, files){
    if(!files || files.length === 0){
      return res.status(404).json({
        responseCode: 1,
        responseMessage: "error"
      });
    }
    /** create read stream */
    var readstream = gfs.createReadStream({
      filename: files[0].filename,
      root: "ctFiles"
    });
    /** set the proper content type */
    res.set('Content-Type', files[0].contentType)
    /** return response */
    return readstream.pipe(res);
  });
});

app.get('/file', function(req, res){
  gfs.collection('ctFiles'); //set collection name to lookup into

  gfs.files.find().toArray(function(err, files){
    if(!files || files.length === 0){
      return res.status(404).json({
        responseCode: 1,
        responseMessage: "error"
      });
    }
    res.send(JSON.stringify(files));
  });
});



// Build for heroku
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client', 'build')));

	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log('Server running on port', PORT);
});
