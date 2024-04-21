import React from "react";
import Image from "next/image"; 

import Style from "./UserCard.module.css";
import images from "../../assets";

const UserCard = ({ el, i, addFriends }) => {
  console.log(el);

  const userName = el.name;
  const accountAddr = el.acctAddress;
  return (
    <div className={Style.UserCard}>
      <div className={Style.UserCard_box}>
        <Image className={Style.UserCard_box_image}
        src={images[`image${i+1}`]} 
        alt="userPic"
        width={100}
        height={100}
        />

        <div className={Style.UserCard_box_info}>
          <h3>{el.name}</h3>
          <p>{el.acctAddress.slice(0,12)}</p>
          <button onClick={() => addFriends(userName, accountAddr)}>
            Message
          </button>
        </div>
      </div>

      {/* <small className={Style.number}>
        {i+1} 
      </small> */}
    </div>
  );
};

export default UserCard;
