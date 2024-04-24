import React, { useContext, useEffect, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import axios from "axios";
import { List, FlexboxGrid, Button } from "rsuite";
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
    <div className="cart-items-container" style={{ padding: "50px" }}>
      <h2
        style={{
          textAlign: "center",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
      >
        Product List
      </h2>
      {data_product.map((item) => (
        <List style={{ paddingTop: "60px" }}>
          <List.Item>
            <FlexboxGrid align="middle">
              <FlexboxGrid.Item colspan={6}>
                <img src={item.image} style={{ height: "170px" }} alt="" />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={6}>{item.name}</FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={6}>{item.price}</FlexboxGrid.Item>
              <FlexboxGrid.Item
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
                colspan={6}
              >
                <Button
                  color="red"
                  appearance="primary"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </List.Item>
        </List>
      ))}

      <h2
        style={{ marginTop: "20px", textAlign: "center" }}
        className="total-amount"
      >
        Total Amount: {getTotalAmount()}
      </h2>
    </div>
  );
};

export default CartItems;
