import React, { useState, useEffect, useContext } from "react";

import { UserCard } from "../Components/index";
import Style from "../styles/alluser.module.css";
import { ChatAppContext } from "../Context/ChatAppContext";

const alluser = () => {
  const { userLists, addFriends } = useContext(ChatAppContext);
  return ( 
    <div>
      <div className={Style.body}>
      <div className={Style.alluser_info}>
        <h1>Add New Message</h1>
      </div>
      <div className={Style.alluser}>
        {userLists.map((el, i) => (
          <UserCard key={i+1} el={el} i={i} addFriends={addFriends} />
        ))}
      </div>
    </div>

    </div>
  );
};

export default alluser;
