import React, { useState, useContext } from "react";
import Image from "next/image";

import Style from "./Friend.module.css";
import images from "../../assets";
import Card from "./Card/Card";
import Chat from "./Chat/Chat";
import { ChatAppContext } from "../../Context/ChatAppContext";

const Friend = () => {
  const { sendMsg, readMsg, friendMsg, readUserProfile, account, username, friendList, loading, currentUsername, currentUserAddress } = useContext(ChatAppContext);
  console.log(friendList);
  return (
    <div className={Style.Friend}>
      <div className={Style.Friend_box}>
        <div className={Style.Friend_box_left}>
          {friendList.map((el, i) => (
            <Card key={i + 1} el={el} i={i} readMessage={readMsg} readUserProfile={readUserProfile} />
          ))}
        </div>
        <div className={Style.Friend_box_right}>
          <Chat functionName={sendMsg} readMessage={readMsg} friendMsg={friendMsg} account={account} username={username} loading={loading} currentUserAddress={currentUserAddress} currentUsername={currentUsername} />
        </div>
      </div>
    </div>
  );
};

export default Friend;
