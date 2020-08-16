import { POSTS_LOADED, POSTS_ERROR, ADD_POST, DELETE_POST } from '../actions/types';

const initialState = {
  posts: [],
  currentPost: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case POSTS_LOADED:
      return {...state, posts: payload};

    case POSTS_ERROR:
      return { ...state };

    case ADD_POST: 
      return {...state, posts: payload};

    case DELETE_POST:
      return {...state, payload};

    default:
      return state;
  }
}