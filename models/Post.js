const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	userId: {
		type: Object,
		required: true
	},

	image: {
		type: String
	},
	video: {
		type: String
	},
	title: {
		type: String,
		required: true
	},

	content: {
		type: Object,
		
		firstSubtitle: {
			type: String
		},
		firstParagraph: {
			type: String
		},
		secondSubtitle: {
			type: String
		},
		secondParagraph: {
			type: String
		},
		thirdSubtitle: {
			type: String
		},
		thirdParagraph: {
			type: String
		}
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Post = mongoose.model('post', PostSchema);
