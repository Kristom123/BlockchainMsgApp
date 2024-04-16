import React, {useInsertionEffect, useState, useContext} from "react";
import Image from "next/image"; 
import Link from "next/link";

import Style from "./NavBar.module.css";
import { ChatAppContext } from "../../Context/ChatAppContext";
import { Model, Error } from "../index";
import images from "../../assets";

const NavBar = () => {
  const menuItems = [
    {
      menu: "All Users",
      link: "/alluser",
    },
    {
      menu: "Chat",
      link: "/",
    },
    {
      menu: "Contact",
      link: "/",
    },
    {
      menu: "Settings",
      link: "/",
    },
    {
      menu: "FAQ",
      link: "/",
    },
    {
      menu: "Terms of Service",
      link: "/",
    },
  ]

  const [active, setActive] = useState(2);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const { account, username, connectWallet, createAccount, error } = useContext(ChatAppContext);

  return (
    <div className = {Style.NavBar}>
      <div className = {Style.NavBar_box}>
        <div className = {Style.NavBar_box_left}>
          <Image src={images.logo} alt="logo" width={50} height={50} />
        </div>
        {/* MENU */}
        <div className = {Style.NavBar_box_right}>
          <div className = {Style.NavBar_box_right_menu}>
            {menuItems.map((el, i)=> (
                <div onClick={()=> setActive(i+1)} key={i + 1}
                 className={`${Style.NavBar_box_right_menu_items} ${active == i+1 ? Style.active_btn : ""}`}
                >
                  <Link className={Style.NavBar_box_right_menu_items_link} href={el.link}>
                    {el.menu}
                  </Link>
                </div>
            ))}
          </div>

          {/* CONNECTING TO WALLET BTN */}
          <div className={Style.NavBar_box_right_connect}>
            {account == "" ? (
              <button onClick={() => connectWallet()}>
                {""}
                <span>Connect to Wallet</span>
              </button>
            ) : (
              <button onClick={() => setOpenModel(true)}>
                {""}
                <Image src={username ? images.accountName : images.create2}
                alt="Profile Image"
                width={20}
                height={20}
                />
                {''}
                <small>{username || "Create Account"}</small>
              </button>
            )}
          </div>

          <div className={Style.NavBar_box_right_open} onClick={()=>setOpen(true)}>
            <Image src={images.open} alt="open" width={30} height={30} />
          </div>
        </div>
      </div>

      {/* MODEL */}
      {openModel && (
        <div className={Style.model_box}>
          <Model 
            openModel={setOpenModel}
            title = "Hey! This is"
            head = "APP NAME"
            info = "Interested in chatting with your college peers and classmates? You're in the right place!"
            subInfo = "Enter your name"
            image={images.hero}
            functionName={createAccount}
            address={account}
          />
        </div>
      )}
      {error == "" ? "" : <Error error={error} />}
    </div>
  );
};

export default NavBar;
