import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import Style from "./Filter.module.css";
import images from "../../assets";
import { ChatAppContext } from "../../Context/ChatAppContext";
import { Model } from "../index";

const Filter = () => {
  const { account, addFriends } = useContext(ChatAppContext);

  const [addFriend, setAddFriend] = useState(false);

  return ( 
    <div className={Style.Filter}>
      <div className={Style.Filter_box}>
        <div className={Style.Filter_box_left}>
          {/* <div className={Style.Filter_box_left_search}>
            <Image src={images.search} alt="search img" width={20} height={20} />
            <input type="text" placeholder="Search..." />
          </div> */}
        </div>
        <div className={Style.Filter_box_right}>
          {/* <button>
            <Image src={images.clear} alt="clear img" width={20} height={20} />
            Clear Chat
          </button> */}
          {/* <button onClick={() => setAddFriend(true)}> */}
          <button>
            <Image src={images.user} alt="clear img" width={20} height={20} />
            <Link href={{pathname: '/alluser'}}>Create New Message</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
