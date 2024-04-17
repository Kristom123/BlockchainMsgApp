import React, { useState, useEffect, useContext } from "react";

import { UserCard } from "../Components/index";
import Style from "../styles/alluser.module.css";
import { ChatAppContext } from "../Context/ChatAppContext";

const profile = () => {
  const { userLists, addFriends } = useContext(ChatAppContext);
  return ( 
    <div>
      <div className={Style.alluser_info}>
        <h1>THIS IS ACTUALLY THE PROFILE</h1>
      </div>
    </div>
  );
};

export default profile;
