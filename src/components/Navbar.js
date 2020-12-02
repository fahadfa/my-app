import React, { useState, useContext } from "react";
import "./Navbar.css";
import { UserContext } from "../UserContext/UserContext";
// import SearchBar from "./SearchBar";

const Navbar = (props) => {
  const cartProduct = useContext(UserContext);
  const [phrase, setPhrase] = useState("");
  const fixedURL = "https://qa.jazeerapaints.com/en/search?query=";
  const [mySearch, setUrl] = useState(fixedURL);
  if (phrase === "Jazeera") {
    alert("Welcome to Jazeera Paints!");
  }
  const handleUserNameInput = (e) => {
    setPhrase(e.target.value);
    setUrl(fixedURL + e.target.value);
  };
  const onEnter = (e) => {
    if (e.key === "Enter") {
      setNewUrl();
    }
  };
  const setNewUrl = (e) => {
    window.open(mySearch, "_blank");
    setPhrase("");
    setUrl();
  };
  return (
    <>
      <nav>
        <ul className="left">
          <li>
            العربية
            <a href="https://jazeerapaints.com/en/cart" target="_blank">
              <span className="cart">
                <i className="fas fa-cart-plus"></i>
              </span>
              <span className="cartCount">{cartProduct.products.length} </span>
            </a>
            Cart
          </li>
        </ul>
        <div className="Place">
          <input
            type="text"
            placeholder="What are you looking for..?"
            onKeyPress={onEnter}
            onChange={handleUserNameInput}
            value={phrase}
            // onChange={(e) => setPhrase(e.target.value)}
          ></input>
        </div>

        <ul className="Search">
          <span>
            <a
              href="https://jazeerapaints.com/en/search?query="
              target="_blank"
            >
              <i class="fas fa-search"></i>
            </a>
          </span>
        </ul>
        <ul className="right">
          <li>
            دهانات الجزيرة Jazeera Paints<a href=""></a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
