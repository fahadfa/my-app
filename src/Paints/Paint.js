import React, { useEffect, useState,useContext } from "react";
import data from "../Data/Data";
import Product from "../Product/Product";
import { UserContext } from './../UserContext/UserContext';


const Paint = (props) => {
  // const filtereddata = data.slice(1)
  const cartProduct = useContext(UserContext);
  const [allProducts, setAllProducts] = useState([]);
  const [images, setImages] = useState([]);
  const[productFilter,setproductFilter]=useState([])

  useEffect(() => {
    const paint = fetch(
      "https://gist.githubusercontent.com/Sarfraz21/1f4f4f556adb3ba6910d28eac2d09f93/raw/64097fa499d5cdf9ae709ec0232f4a1807e2950c/product_api",
      { cors: true }
    )
      .then((response) => {
        return response.json();
      })
      .then((paint) => {
        console.log(paint);
        setAllProducts(paint.products);
        setImages(paint.files);
      });
  }, []);
 const handlelow=()=>{
   console.log("low to high")
 }
  const handleHigh = () => {
    console.log("high to low ");
  };
  return (
    <>
      <div className="row col-3" style={{ marginTop: 100 }}>
        <div>
          <button onClick={handlelow} style={{backgroundColor:"aquamarine",marginRight: 20, marginLeft:37,padding:5}}>Low to High</button>
          <button onClick={handleHigh} style={{backgroundColor:"aquamarine",padding:5}}>High to Low</button>
        </div>
        {allProducts
          .sort((a, b) => {
            return a.price - b.price;
          })
          .map((x, index) => {
            return (
              <Product
                cartProduct
                sname={x.name}
                imgsrc={
                  (images.find((item) => item.id === x.can_img_id) || {})
                    .download_url
                }
                Price={x.price}
                links={x.slug}
              />
            );
          })}
      </div>
    </>
  );
};

export default Paint;
