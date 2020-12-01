import React, { useEffect, useState, useContext } from "react";
import data from "../Data/Data";
import Product from "../Product/Product";
import { UserContext } from "./../UserContext/UserContext";

const Paint = (props) => {
  // const filtereddata = data.slice(1)
  const cartProduct = useContext(UserContext);
  const [allProducts, setAllProducts] = useState([]);
  const [images, setImages] = useState([]);
  const [productFilter, setproductFilter] = useState([]);

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

        //sort the result
        const sortedProducts = paint.products.sort((a, b) => {
          return a.price - b.price;
        });

        setAllProducts(sortedProducts);
        setImages(paint.files);
      });
  }, []);

  const handlelow = () => {
    const sortedProducts = allProducts.sort((a, b) => {
      return a.price - b.price;
    });
    setAllProducts([...sortedProducts]);
  };

  const handleHigh = () => {
    const sortedProducts = allProducts.sort((a, b) => {
      return b.price - a.price;
    });
    setAllProducts([...sortedProducts]);
  };

  return (
    <>
      <div className="row col-3" style={{ marginTop: 100 }}>
        <div>
          <button
            onClick={handlelow}
            style={{ backgroundColor: "aquamarine", marginRight: 20, marginLeft: 37, padding: 5 }}
          >
            Low to High
          </button>
          <button onClick={handleHigh} style={{ backgroundColor: "aquamarine", padding: 5 }}>
            High to Low
          </button>
        </div>
        {allProducts.map((x, index) => {
          return (
            <Product
              key={index}
              cartProduct
              sname={x.name}
              imgsrc={(images.find((item) => item.id === x.can_img_id) || {}).download_url}
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
