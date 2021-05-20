import { createStore, combineReducers } from "redux";
import loginReducer from "./login/loginReducer";
import postsReducer from "./posts/postsReducer";

const store = createStore(
  combineReducers({
    auth: loginReducer,
    posts: postsReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
