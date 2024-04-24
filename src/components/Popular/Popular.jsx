import React, { useEffect, useState } from "react";
import "./Popular.css";
import axios from "axios";
import { Link,useNavigate } from 'react-router-dom'

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
    <div className="popular">
      <h1>Products</h1>
      <hr />

      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <div
              key={i}
              onClick={() => {Navigate(`/product/${item.id}`)}}
              style={{
                border: "solid",
                width: "180px",
                borderRadius: 4,
                borderColor: "black",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                flexDirection: "column",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <img
                src="http://localhost:4000/uploads/image-1713968285679-Group.png"
                style={{
                  height: "40px",
                  objectFit: "contain",
                  marginBottom: "10px",
                }}
                alt=""
              />
              <p>Name : {item.name}</p>
              <p>New Price : {item.new_price}</p>
              <p>Old Price : {item.old_price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
