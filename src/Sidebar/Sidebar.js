import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css"

  const Sidebar = (props) => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/ Contact">
        Contact
      </a>
      <a className="menu-item" href="/Sevices">
        Sevices
      </a>
      <a className="menu-item" href="/Business">
        Business
      </a>
    </Menu>
  );
};
export default Sidebar