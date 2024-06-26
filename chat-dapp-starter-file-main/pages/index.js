import React, { useEffect, useState, useContext } from "react";

/*
import NavBar from "./NavBar/NavBar";
import Filter from "./Filter/Filter";
import Error from "./Error/Error";
import Loader from "./Loader/Loader";
import Model from "./Model/Model";
import UserCard from "./UserCard/UserCard";
import Friend from "./Friend/Friend";
*/
import { NavBar, Filter, Error, Loader, Model, UserCard, Friend } from "../Components/index";

import { ChatAppContext } from "../Context/ChatAppContext";

const index = () => {
  const {title} = useContext(ChatAppContext);
  return (
  <div>
    <Filter />
    <Friend />
    {title}
  </div>
  );
};

export default index;
