import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
  CREATE_POST_SUCCESS
} from "./postsTypes";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        posts: action.posts,
      };
    case FETCH_POSTS_FAILED:
      return {
        ...state,
        loading: false,
        error: "erreur inconnue",
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [action.post, ...state.posts]
      };
    default:
      return state;
  }
};

export default postsReducer;
