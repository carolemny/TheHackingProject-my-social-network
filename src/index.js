import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import Register from "./components/Register";

import store from "./redux/store";

import "antd/dist/antd.css";
import "./index.scss";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App container">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/register" component={Register}></Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
