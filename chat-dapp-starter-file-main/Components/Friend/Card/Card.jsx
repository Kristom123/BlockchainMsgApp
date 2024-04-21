import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Style from "./Card.module.css";
import images from "../../../assets";

const Card = ({el, i, readMessage, readUserProfile}) => {
  return (
    <Link href={{pathname: '/', query: {name: `${el.name}`, address: `${el.pubkey}`}}}>
      <div className={Style.Card} 
          onClick={() => (readMessage(el.pubkey), readUserProfile(el.pubkey))}>
        <div className={Style.Card_box}>
          <div className={Style.Card_box_left}>
            <Image className={Style.Card_box_left_img} src={images.accountName} alt="user-img" width={50} height={50}/>
          </div>
          <div className={Style.Card_box_right}>
            <div className={Style.Card_box_right_middle}>
              <h4>{el.name}</h4>
              <small>{el.pubkey.slice(0,12)}</small>
            </div>
          </div>
        </div>
      </div>
    </Link>
    
  );
};

export default Card;
