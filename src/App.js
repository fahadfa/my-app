import React from "react";
import Navbar from "./components/Navbar";
import Paint from "./Paints/Paint";
import Sidebar from "./Sidebar/Sidebar";


function App() {
  return (
    <div>
     <Sidebar/>
      <Navbar />
      <Paint />
    </div>
  );
}

export default App;
