import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Paint from "./Paints/Paint";
import { UserContext, UserContextProvider } from "./UserContext/UserContext";
const App = () => {
  // useEffect(()=>{
  //   setCartproduct(cartProduct+1)
  // },[])

  return (
    <UserContextProvider>
      <Navbar />
      <Paint />
    </UserContextProvider>
  );
};

export default App;
