//import { userEvent } from '@testing-library/user-event/dist/types/setup';
import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import db from "./firebase";
import { auth } from './firebase';
import Nav from "./Nav";
import PlansScreen from './PlansScreen';
import "./ProfileScreen.css";
import { Link } from "react-router-dom";
import Row from "./Row";

function ProfileScreen() {

  const user = useSelector(selectUser);



  return (
    <div className="profileScreen">
      <Nav />

      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />

          <div className="profileScreen_details">
            <h2>Hello!</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>

              <PlansScreen />

              <Link to="/login">
                <button
                  onClick={() => auth.signOut}
                  className="profileScreen_signOut"
                >
                  Sign Out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProfileScreen;
