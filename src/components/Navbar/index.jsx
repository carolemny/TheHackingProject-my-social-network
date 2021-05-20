import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);

  /*  console.log(auth); */

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">S'inscrire</Link>
        </li>
        {auth.loggedIn ? (
          <>
            <li>
              <Link to="/profile">Mon profil</Link>
            </li>
            <li>
              <Link to="/logout">Se déconnecter</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Se connecter</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
