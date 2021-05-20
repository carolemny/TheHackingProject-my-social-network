import React from "react";
import { useSelector } from "react-redux";

import Posts from "../Posts";
import PostForm from "./PostForm";

const Home = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="Home">
      <h1>My Social Network</h1>
      <p>
        Ce site est un site factice me permettant de m'entrainer à utiliser
        React et Redux. Il utilise l'authentification et le routing pour créer
        un mini réseau social.
      </p>
      {auth.loggedIn && (
        <div>
          <PostForm />
        </div>
      )}
      <Posts />
    </div>
  );
};

export default Home;
