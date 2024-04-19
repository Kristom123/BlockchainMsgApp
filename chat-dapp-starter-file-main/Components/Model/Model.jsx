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
      {/* <div className={Style.circle}>
      <Image src={images.ellipse2} alt="circle2" width={240} height={170} />
      </div> */}



      
      <div className={Style.Model_box}>
      
        
        
        {/* <div className={Style.Model_box_left}>
          <Image src={image} alt="buddy" width={700} height={700} />
          
        </div> */}
        
        <div className={Style.Model_box_right}>
        
          
        {/* <img src="https://i.postimg.cc/FFYgJqq6/Group.png" alt="Image" className={Style.textlogo}></img> */}
        
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
                
                <img src="https://i.postimg.cc/FFYgJqq6/Group.png" alt="Image" className={Style.textlogo}></img>
                
            <div className={Style.Model_box_right_name_info}>
            
              <Image src={images.user} alt="user" width={30} height={30} />
              <input id="name-input" type="text" placeholder={username || "Email"} onChange={(e)=>setName(String(e.target.value))} style={{ color: 'white' }}/>
            </div>
            <div className={Style.Model_box_right_name_info}>
              <Image src={images.lock} alt="user" width={30} height={30} />
              <input type='text' placeholder={address || "Password"} onChange={(e)=>setAccountAddress(e.target.value)}/>
            </div>
            <div className={Style.Model_box_right_name_btn}>
              <button onClick={() => functionName(document.getElementById("name-input").value, {accountAddress})}>
                {""}
                {/* <Image src={images.send} alt="send" width={30} height={30} /> */}
                {""}
                Login
              </button>
              <button onClick={() => openModel(false)}>
                {""}
                {/* <Image src={images.close} alt="send" width={30} height={30} /> */}
                {""}
                Close
              </button>
              {/* <img src="https://i.postimg.cc/gjLQgbq0/Vector-1.png" alt="Image" class="background-image"></img> */}
            </div>
            {/* <img src="https://i.postimg.cc/gjLQgbq0/Vector-1.png" alt="Image" className={Style.backgroundimage}></img> */}
          </div>
            )
          }
          

        </div>
        <div className={Style.circle1}>
            <Image src={images.ellipse1} alt="circle1" width={210} height={210} />
        </div>
        <img src="https://i.postimg.cc/gjLQgbq0/Vector-1.png" alt="Image" className={Style.backgroundimage}></img>
      </div>
    </div>
  )
};

export default Model;
