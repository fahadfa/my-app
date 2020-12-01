import React, { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import Paint from "./Paints/Paint";
import { UserContext } from './UserContext/UserContext';
const App = () => {
  const [cartProduct, setCartproduct] = useState(0);
  
  
  // useEffect(()=>{
  //   setCartproduct(cartProduct+1)
  // },[])
 
  return (
    <>
    
      <UserContext.Provider value={cartProduct}>
        <Navbar />
        <Paint 
        />
      </UserContext.Provider>
      <button onClick={()=> setCartproduct(cartProduct+1)}>Addto basket</button>
    </>
  );
};

export default App;
