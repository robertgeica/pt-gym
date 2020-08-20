import axios from 'axios';

import { POSTS_LOADED, POSTS_ERROR, ADD_POST, DELETE_POST, LOAD_FILES, LOAD_FILES_ERROR, UPLOAD_FILE, UPLOAD_FILE_ERROR, LOAD_POST } from './types';

// Load posts from database
export const loadPosts = () => async dispatch => {
  try {
    const res = await axios.get('/post');

    dispatch({
      type: POSTS_LOADED,
      payload: res.data
    });

  } catch (error) {
    dispatch({
      type: POSTS_ERROR
    })
  }
}

// load post 
export const loadPost = (id) => async dispatch => {

  try {
    const res = await axios.get('/post/' + id);

    dispatch({
      type: LOAD_POST,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: POSTS_ERROR
    })
  }
}

// Load current post to state
// export const currentPost = post => async dispatch => {
//   try {
    
//     dispatch({
//       type: CURRENT_POST,
//       payload: post
//     })
//   } catch (error) {
//     dispatch({
//       type: POSTS_ERROR
//     })
//   }
// }

// add new post
export const addPost = (post) => async dispatch => {
  console.log(post);
  try {
    const posts = await axios.post('/post', post);

    dispatch({
      type: ADD_POST,
      payload: [ post ]
    });
    dispatch(loadPosts());

  } catch (error) {
    dispatch({
      type: POSTS_ERROR
    })
  }
}

// delete post
export const deletePost = id => async dispatch => {

    // console.log(id);
  try {
    const res = await axios.delete('/post/' + id);

    dispatch({
      type: DELETE_POST,
      payload: res.data
    })
    dispatch(loadPosts());
  } catch (error) {
    dispatch({
      type: POSTS_ERROR
    })
  }
}

// load files
export const loadFiles = () => async dispatch => {

  try {
    const res = await axios.get('/file');

    dispatch({
      type: LOAD_FILES,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: LOAD_FILES_ERROR
    })
  }
}
// upload file
export const uploadFile = file => async dispatch => {

  try {
    const formData = new FormData();
    formData.append('file', file);
    console.log(file);
    const files = await axios.post('/upload', formData);

    dispatch({
      type: UPLOAD_FILE,
      payload: [file]
    }) 
  } catch (error) {
    dispatch({
        type: UPLOAD_FILE_ERROR
    })
  }
}

