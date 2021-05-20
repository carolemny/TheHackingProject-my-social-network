import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPostsRequest,
  fetchPostsFailed,
  fetchPostsSuccess,
} from "../../redux";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const auth = useSelector((state) => state.auth);

  const fetchPosts = () => {
    dispatch(fetchPostsRequest());
    fetch("http://localhost:1337/posts?_sort=created_at:desc")
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 404) {
          dispatch(fetchPostsFailed());
        } else {
          dispatch(fetchPostsSuccess(response));
        }
      });
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="Posts">
      {posts.posts.map((post) => (
        <div className="DisplayPost" key={post.id}>
          <h3>{post.text}</h3>
          {auth.loggedIn && (
            <div>
              <p>{post.user.username.toUpperCase()}</p>
              <p>{post.like} likes</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Posts;
