import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
  CREATE_POST_SUCCESS,
} from "./postsTypes";

export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts,
  };
};

export const fetchPostsFailed = (error) => {
  return {
    type: FETCH_POSTS_FAILED,
    error,
  };
};

export const createPostSuccess = (post) => {
  return {
    type: CREATE_POST_SUCCESS,
    post,
  };
};
