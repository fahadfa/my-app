import React from "react";
import "./Product.css";


const Product = (props) => {
  return (
    <div>
      {/* {props.images.find((item) => item.id === props.imgsrc)} */}
      <div className="cards">
        <div className="card">
          <img
            src={props.imgsrc}
            alt="mypic"
            className="card_img"
          />
          <div className="card_info">
            <h3 className="card_title">{props.sname}</h3>
            <span className="card_category">{props.Price} </span>
            <a href={props.links} target="_blank">
              <button className="Button">Buy Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
