import React, { useContext, useEffect, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import axios from "axios";

const CartItems = () => {
  const [data_product, setData_product] = useState([]);

  //get cart items by id
  useEffect(() => {
    axios
      .get("http://localhost:4000/cart/2")
      .then((response) => {
        console.log(response.data);
        setData_product(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const removeFromCart = (id) => {
    axios
      .post("http://localhost:4000/removefromcart", { id })
      .then((response) => {
        console.log(response.data);
        setData_product((prev) => prev.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const getTotalAmount = () => {
    return data_product.reduce((acc, item) => acc + item.price, 0);
  };

  return (
    <div className="cart-items-container">
      <h2>Product List</h2>

      <ul className="cart-list">
        {data_product.map((item) => (
          <li key={item.id}>
            <div style={{ display: "flex" }}>
              <img src={item.image} style={{ height: "70px" }} alt="" />
              <div>{item.name}</div>
              <div>{item.price}</div>
              <button onClick={() => removeFromCart(item.id)}>
                <img src={remove_icon} alt="Remove" />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total-amount">Total Amount: {getTotalAmount()}</div>
    </div>
  );
};

export default CartItems;
