import React, { useState } from "react";
import { useSelector } from "react-redux";

import ProfileForm from "../ProfileForm";

const Profile = () => {
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({});

  const fetchProfileUser = () => {
    fetch("http://localhost:1337/users/me", {
      method: "get",
      headers: {
        Authorization: `Bearer ${auth.userToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        /* console.log(response); */
        setUser({
          description: response.description,
          username: response.username,
          email: response.email,
        });
      });
  };

  React.useEffect(() => {
    fetchProfileUser();
  }, []);

  return (
    <>
      {!auth.loggedIn && (
        <p>Vous devez vous connecter pour accéder à cette page...</p>
      )}
      {auth.loggedIn && (
        <div className="Profile">
          <div className="ProfileInfos">
            <p>
              <strong>Nom d'utilisateur : </strong> {user.username}
            </p>
            <p>
              <strong>Adresse email : </strong> {user.email}
            </p>
            <p>
              <strong>Description : </strong> {user.description}
            </p>
          </div>
          <ProfileForm
            dataUsername={user.username}
            dataDescription={user.description}
          />
        </div>
      )}
    </>
  );
};

export default Profile;
