import React, { useContext, useState } from "react";
import Image from "next/image";

import Style from "./Model.module.css";
import images from "../../assets";
import { ChatAppContext } from "../../Context/ChatAppContext";
import { Loader } from "../../Components/index";

const Model = ({openModel, title, head, info, subInfo, image, functionName, address, username}) => {
  const [name, setName] = useState("");
  const [accountAddress, setAccountAddress] = useState("");

  const { loading, createAccount } = useContext(ChatAppContext);

  return (
    <div className={Style.Model}>
      <div className={Style.Model_box}>
        <div className={Style.Model_box_left}>
          <Image src={image} alt="buddy" width={700} height={700} />
        </div>
        <div className={Style.Model_box_right}>
          <h1>
            {title} <span>{head}</span>
          </h1>
          <p>{info}</p>
          <small>{subInfo}</small>

          {
            loading == true ? (
              <Loader />
            ) : (
              <div className={Style.Model_box_right_name}>
            <div className={Style.Model_box_right_name_info}>
              <Image src={images.username} alt="user" width={30} height={30} />
              <input id="name-input" type="text" placeholder={username || "Enter your username"} onChange={(e)=>setName(String(e.target.value))}/>
            </div>
            <div className={Style.Model_box_right_name_info}>
              <Image src={images.account} alt="user" width={30} height={30} />
              <input type='text' placeholder={address || "Enter Your Account Address"} onChange={(e)=>setAccountAddress(e.target.value)}/>
            </div>
            <div className={Style.Model_box_right_name_btn}>
              <button onClick={() => functionName(document.getElementById("name-input").value, {accountAddress})}>
                {""}
                <Image src={images.send} alt="send" width={30} height={30} />
                {""}
                Submit
              </button>
              <button onClick={() => openModel(false)}>
                {""}
                <Image src={images.close} alt="send" width={30} height={30} />
                {""}
                Close
              </button>
            </div>
          </div>
            )
          }

        </div>
      </div>
    </div>
  )
};

export default Model;
