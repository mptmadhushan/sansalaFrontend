import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import axios from "axios";
const ProductDisplay = (props) => {
  console.log("🚀 ~ ProductDisplay ~ props:", props);

  const { product } = props;
  const addToCart = (product) => {
    console.log("🚀 ~ ProductDisplay ~ product:", product);
    const productData = {
      product_id: product.id,
      user_id: 2,
      name: product.name,
      image: product.image,
      price: product.new_price,
    };
    axios
      .post("http://localhost:4000/addtocart",  productData )
      .then((response) => {
        console.log(response.data);
        // Handle the response data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle the error
      });
  };
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
