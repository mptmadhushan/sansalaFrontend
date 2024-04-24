import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Popular.css";
import { Panel } from "rsuite";

const Popular = () => {
  useEffect(() => {
    axios
      .get("http://localhost:4000/allproducts")
      .then((response) => {
        console.log(response.data);
        setData_product(response.data);
        // Handle the response data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle the error
      });
  }, []); // Empty dependency array ensures the effect runs only once, like componentDidMount
  const [data_product, setData_product] = useState([]);
  const Navigate = useNavigate();
  return (
    <div className="popular" style={{ marginTop: "20px" }}>
      <h1 style={{ color: "#111" }}>Products</h1>
      <hr />

      <div
        className="popular-item"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "50px",
          justifyContent: "center",
        }}
      >
        {data_product.map((item, i) => {
          return (
            <Panel
              onClick={() => Navigate(`/product/${item.id}`)}
              shaded
              bordered
              bodyFill
              style={{ display: "inline-block", width: 240 }}
            >
              <img src={item.image} height="240" />
              <Panel header={item.name}>
                <p>
                  <small>Price: {item.old_price}</small>
                </p>
                <p>
                  <small>Discounted price: {item.new_price}</small>
                </p>
              </Panel>
            </Panel>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
