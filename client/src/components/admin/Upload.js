import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import axios from 'axios';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../../store/store';

import { loadFiles, uploadFile } from '../../actions/post';


const Upload = ({ posts }) => {
	const [ file, setUploadFile ] = useState({ name: null });
	const [ files, setFiles ] = useState([]);
  const [ isUploading, setIsUploading] = useState(false);

	const getImageData = () => {
    store.dispatch(loadFiles());
    setFiles(posts.files);
    setIsUploading(false);
    
	};

	const fileUpload = (file) => {
		store.dispatch(uploadFile(file));
    setIsUploading(true);
	};


	useEffect(() => {
		getImageData();
    console.log('useff');
	}, [isUploading]);

	const onFormSubmit = (e) => {
		e.preventDefault();
		fileUpload(file);
	};

	const onChange = (e) => {
		setUploadFile(e.target.files[0]);
	};

  let imgs;
  if(files.length > 0) {
    imgs = files.map(i => {

    })
  }
  let lastFileFilename = files[files.length-1];

  if(lastFileFilename == undefined) {
    console.log('no file');
  } else {
    lastFileFilename = files[files.length-1].filename;
  }

  const copyToClipboard = () => {
    const copyText = document.getElementById('fileFilename');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    console.log('copied', copyText.value);
  }

	return (
		<div>
			<h1>upload</h1>

			<div className="container  is-fluid">
				<input className="file-input" type="file" name="resume" onChange={onChange} />

				<span className="file-name">{uploadFile.name}</span>
				<br />

				<button onClick={onFormSubmit} type="submit">
					Upload
				</button>

        <p>Last uploaded file filename</p>
        <input type="text" id="fileFilename" defaultValue={lastFileFilename} /> 
        <button onClick={copyToClipboard}>copy filename</button>
        
			</div>
		</div>
	);
};

// // <ImageCard key={i._id} alt={i.metadata.originalname} src={'/file/'+i.filename} date={i.uploadDate} />

//           <img className="upload-img" key={i._id} src={'http://localhost:4000/file/'+i.filename} date={i.uploadDate} />



const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps, { uploadFile, loadFiles })(Upload);
