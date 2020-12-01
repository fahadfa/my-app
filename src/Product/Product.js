import React from "react";
// import "./Product.css";

const Product = (props) => {
  const Addtobasket = (e) => {
   
  };
  return (
    <>
      <div>
        <div
          className="card"
          style={{ width: "20%", margin: "6%", float: "left" }}
        >
          <img
            src={props.imgsrc}
            className="img-fluid"
            style={{ width: "200px", height: "100px" }}
          />
          <div className="card-body text-center p-0">
            <div className="card-block text-center">
              <h5>{props.sname}</h5>
              <h5>{props.Price}</h5>
              <button
                onClick={Addtobasket(props.name)}
                style={{ backgroundColor: "turquoise" }}
              >
                Add to Basket
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;


 // <div>
    //   {props.images.find((item) => item.id === props.imgsrc)}
    //   <div className="cards">
    //     <div className="card">
    //       <img src={props.imgsrc} alt="mypic" className="card_img" style={{width:'150px',height:'100px'}} />
    //       <div className="card_info">
    //         <h3 className="card_title">{props.sname}</h3>
    //         <span className="card_category">{props.Price} </span>
    //         <a href={props.links} target="_blank">
    //         <button className="Button">Buy Now</button>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>