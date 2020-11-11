import React, { useEffect, useState } from "react";
import data from "../Data/Data";
import Product from "../Product/Product";

const Paint = () => {
  // const filtereddata = data.slice(1)
  const [allProducts, setAllProducts] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const paint = fetch("http://api-qa.jazeerapaints.com/api/products")
      .then((response) => {
        return response.json();
      })        
      .then((paint) => {
        console.log(paint);
        setAllProducts(paint.products);
        setImages(paint.files);
      });
  }, []);

  return (
    <div>
      filtered
      {allProducts.map((x, index) => {
        return (
          <Product
              sname={x.name}
               imgsrc={(images.find((item) => item.id === x.can_img_id) || {})
               .download_url}
              Price={x.price}
               links={x.slug}
             />
        );
      })}
    </div>
  );
};

export default Paint;
