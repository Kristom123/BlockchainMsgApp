import React, { useState, useContext } from "react";
import Image from "next/image";

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
          <div className={Style.Filter_box_left_search}>
            <Image src={images.search} alt="search img" width={20} height={20} />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className={Style.Filter_box_right}>
          <button>
            <Image src={images.clear} alt="clear img" width={20} height={20} />
            Clear Chat
          </button>
          <button onClick={() => setAddFriend(true)}>
            <Image src={images.user} alt="clear img" width={20} height={20} />
            Add Friend
          </button>
        </div>
      </div>

      {addFriend && (
        <div>
          <Model openModel={setAddFriend}
          title="Welcome to"
          head="APP NAME"
          info="you know what it isss - this model pops up when adding a friend"
          subInfo="yuh yuh"
          image={images.hero}
          functionName={addFriends}
          />
        </div>
      )}
    </div>
  );
};

export default Filter;
