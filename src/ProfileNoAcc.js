import { React, useEffect, useState } from "react";
import db from "./firebase";
import { auth } from "./firebase";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function ProfileNoAcc() {
  return (
    <div>
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
                <h3>Create an Account to Access Features</h3>


                <Link to="/">
                  <button
                    onClick={() => auth.signOut}
                    className="profileScreen_signOut"
                  >
                    Register
                  </button>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileNoAcc;
