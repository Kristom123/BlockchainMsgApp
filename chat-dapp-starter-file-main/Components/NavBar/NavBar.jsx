import React, { useInsertionEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import Style from "./NavBar.module.css";
import { ChatAppContext } from "../../Context/ChatAppContext";
import { Model, Error } from "../index";
import images from "../../assets";

const NavBar = () => {
  const menuItems = [
    // {
    //   menu: "All Users",
    //   link: "/alluser",
    // },
    // {
    //   menu: "Profile",
    //   link: "/profile",
    // },
    {
      menu: "CHAT",
      link: "/",
    },
  ]

  const [active, setActive] = useState(2);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const { account, username, connectWallet, createAccount, error } = useContext(ChatAppContext);

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
          <Image src={images.logo} alt="logo" width={50} height={50} />
        </div>
        {/* MENU */}
        <div className={Style.NavBar_box_right}>
          <div className={Style.NavBar_box_right_menu}>
            {menuItems.map((el, i) => (
              <div onClick={() => setActive(i + 1)} key={i + 1}
                className={`${Style.NavBar_box_right_menu_items} ${active == i + 1 ? Style.active_btn : ""}`}
              >
                <Link className={Style.NavBar_box_right_menu_items_link} href={el.link}>
                  <div><b>ORCA</b> {el.menu}</div>
                </Link>
              </div>
            ))}
          </div>

          <div>
            {/* CONNECTING TO WALLET BTN */}
            <div className={Style.NavBar_box_right_connect}>
              {account == "" ? (
                <button onClick={() => connectWallet()}>
                  {""}
                  <span>Connect to Wallet</span>
                </button>
              ) : (
                username == "" ? (
                  <button onClick={() => setOpenModel(true)}>
                    {""}
                    <Image src={images.create2}
                      alt="Profile Image"
                      width={20}
                      height={20}
                    />
                    {""}
                    Connect to Wallet
                  </button>
                ) : (
                  <div className={Style.NavBar_box_right_connect}>
                    <button>
                      <Link href={{ pathname: '/profile' }}>
                        <div className={Style.NavBar_box_right_connect}>
                          <Image src={images.accountName}
                            alt="Profile Image"
                            width={20}
                            height={20}
                          />
                          {""} <small></small>
                          {username}
                        </div>
                      </Link>
                    </button>
                    <button onClick={() => setOpenModel(true)}>
                      Sign Out
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MODEL */}
      {openModel && (

        <div className={Style.model_box}>

          <div className={Style.circle}>
            <Image src={images.ellipse2} alt="circle2" width={240} height={170} />
          </div>

          <Model
            openModel={setOpenModel}
            //  title = "Hey! This is"
            //  head = "APP NAME"
            // info = "Interested in chatting with your college peers and classmates? You're in the right place!"
            //  subInfo = "Enter your name"
            image={images.hero}
            functionName={createAccount}
            address={account}
            username={username}

          />

          {/* <img src="https://i.postimg.cc/gjLQgbq0/Vector-1.png" alt="Image" class="background-image"></img> */}
          {/* <div className={Style.fullWidthImage}></div> */}
        </div>
      )}
      {error == "" ? "" : <Error error={error} />}
    </div>
  );
};

export default NavBar;
