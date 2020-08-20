import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import axios from 'axios';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../../store/store';

import { loadFiles, uploadFile } from '../../actions/post';


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './admin.scss';

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
		<div className="upload-container">
			<h1>Upload image/video</h1>

			<div >
				<input className="btn" type="file" onChange={onChange} />

				<button className="btn" onClick={onFormSubmit} type="submit">
					Upload
				</button>

        <p>Last uploaded file filename</p>

				<input type="text" class="form__field" id="fileFilename" defaultValue={lastFileFilename} required />

        <button className="btn" onClick={copyToClipboard}>Copy File Name</button>
        
			</div>
		</div>
	);
};

// // <ImageCard key={i._id} alt={i.metadata.originalname} src={'/file/'+i.filename} date={i.uploadDate} />

//           <img className="upload-img" key={i._id} src={'http://localhost:4000/file/'+i.filename} date={i.uploadDate} />



const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps, { uploadFile, loadFiles })(Upload);
