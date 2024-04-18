import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Style from "./Chat.module.css";
import images from "../../../assets";
import { convertTime } from "../../../Utils/apiFeature";
import { Loader } from "../../index";

const Chat = ({ functionName, readMessage, friendMsg, account, username, loading, currentUserAddress, currentUsername}) => {
  const [message, setMessage] = useState("");
  const [chatInfo, setChatInfo] = useState({name: "", address: ""});
  
  const router = useRouter();

  useEffect (() => {
    if (!router.isReady) return;
    setChatInfo(router.query)
  }, [router.isReady]);

  console.log(friendMsg);
  console.log(friendMsg)

  const friend_addr = router.query.address;

  return ( 
    <div className={Style.Chat}>
      {currentUserAddress && currentUsername ? (
        <div className={Style.Chat_user_info}>
          <Image src={images.accountName} alt="img" width={70} height={70}/>
          <div className={Style.Chat_user_info_box}>
            <h4>{currentUsername}</h4>
            <p className={Style.show}>{currentUserAddress}</p>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className={Style.Chat_box}>
        <div className={Style.Chat_sub_box}>
          <div className={Style.Chat_sub_box_left}>
            {
              friendMsg.map((el, i)=> (
                <div key={i}>
                  {el.sender == chatInfo.address ? 
                  (
                    <div className={Style.Chat_sub_box_left_title}>
                      <Image src={images.accountName} alt="image" width={50} height={50}/>
                      <span>
                        {currentUsername} {""}
                        <div>
                          <small>{convertTime(el.timestamp)}</small>
                        </div>
                      </span>
                      <div className={Style.Chat_sub_box_right_you}>
                        <p key= {i + 1} >
                          {el.msg}
                          {""} 
                          {""}
                        </p>
                      </div>
                    </div>
                  ) 
                  : 
                  (
                    <div className={Style.Chat_sub_box_right_title}>
                      <div></div>
                      <div className={Style.Chat_sub_box_right_me}>
                        <p key= {i + 1} >
                          {el.msg}
                          {""} 
                          {""}
                        </p>
                      </div>
                      <span>
                        {username} {""}
                        <div>
                          <small>{convertTime(el.timestamp)}</small>
                        </div>
                      </span>
                      <Image src={images.accountName} alt="image" width={50} height={50}/>
                    </div>
                  )}
                </div>
              ))
            }
          </div>
        </div>

        {currentUserAddress && currentUsername ? (
        <div className={Style.Chat_box_send}>
          <div className={Style.Chat_box_send_img}>
            <Image src={images.smile} alt=":)" width={50} height={50}/>
            <input id="msg-input" type="text" placeholder="Enter message..." 
            onChange={(e) => setMessage(document.getElementById("msg-input").value)}
            />
            <Image src={images.file} alt="file" width={50} height={50}/>
            {
              loading == true  ? (
                <Loader />
              ) : (
                <Image src={images.send} alt="send" width={50} height={50}
                  onClick={() => functionName({message}, friend_addr)}/>
              )
            }
          </div>
        </div>
        ) : (
        ""
        )}

      </div>
    </div>
  );
};

export default Chat;
