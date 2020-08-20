import { POSTS_LOADED, POSTS_ERROR, ADD_POST, DELETE_POST, LOAD_FILES, LOAD_FILES_ERROR, UPLOAD_FILE, UPLOAD_FILE_ERROR, LOAD_POST } from '../actions/types';

const initialState = {
  posts: [],
  currentPost: {},
  files: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case POSTS_LOADED:
      return {...state, posts: payload};

    case UPLOAD_FILE:
    case LOAD_FILES:
      return {...state, files: payload};

    case LOAD_POST:
      return {...state, currentPost: payload};

    case POSTS_ERROR:
    case UPLOAD_FILE_ERROR:
    case LOAD_FILES_ERROR:
      return { ...state };

    case ADD_POST: 
      return {...state, posts: payload};

    case DELETE_POST:
      return {...state, payload};

    default:
      return state;
  }
}