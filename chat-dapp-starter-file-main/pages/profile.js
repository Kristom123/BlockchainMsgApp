import React, { useState, useEffect, useContext } from "react";

import { UserCard } from "../Components/index";
import Style from "../styles/profile.module.css";
import { ChatAppContext } from "../Context/ChatAppContext";


const profile = () => {
  const { username, addFriends } = useContext(ChatAppContext);
  return (

    <div className={Style.container}>
      <div className={Style.card}>
        <div className={Style.body}>
          <img
            src="https://i.postimg.cc/SKMNh214/Vector-2-2.png"
            className={Style.cornerImage}
          />


          <img
            src="https://i.postimg.cc/4yCSbncb/Ellipse-3-2.png"
            className={Style.circle}
          />


          <img
            src="https://i.postimg.cc/4yCSbncb/Ellipse-3-2.png"
            className={Style.circle1}
          />

          <img
            src="https://i.postimg.cc/4yCSbncb/Ellipse-3-2.png"
            className={Style.circle2}
          />

          <img
            src="https://i.postimg.cc/4yCSbncb/Ellipse-3-2.png"
            className={Style.circle3}
          />

          <img
            src="https://i.postimg.cc/4yCSbncb/Ellipse-3-2.png"
            className={Style.circle4}
          />
          <br></br>
          <div className={Style.profile}>
            {/* <div className="profile-picture">
              <img src="https://i.postimg.cc/C1MVsKKH/blank-profile-circle-300x300.png" alt="Profile Picture" className={Style.profile_pic} />
            </div> */}
            <div className={Style.profileInfo}>
              <div>
                <div className={Style.name}>
                  <h2 id="name">{username}</h2>
                </div>
                <div className="field">
                  <span className="label"><b>UNIVERSITY:</b></span>
                  <span id="university"> THE UNIVERSITY OF TEXAS AT DALLAS</span>
                </div>
              </div>
              <br></br>
              <div className="field">
                <span className="label"><b>CLASSIFICATION:</b></span>
                <span id="classification"> JUNIOR</span>
              </div>
              <br></br>
              <div className="field">
                <span className="label"><b>DEPARTMENT:</b></span>
                <span id="department"> SCHOOL OF ENGINEERING</span>
              </div>
              <br></br>
              <div className="field">
                <span className="label"><b>MAJOR:</b></span>
                <span id="major"> COMPUTER SCIENCE</span>
              </div>
              <br></br>
              <div className="field">
                <span className="label"><b>MINOR:</b></span>
                <span id="minor"> DATA ANALYTICS</span>
              </div>
              <br></br>
            </div>
          </div>
        </div>


      </div>

    </div>
  );
};

export default profile;