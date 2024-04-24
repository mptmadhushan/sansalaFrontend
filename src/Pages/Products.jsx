import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";
import axios from "axios";
import Popular from "../components/Popular/Popular";
const Products = () => {
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/product/${productId}`)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
        // Handle the response data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle the error
      });
  }, []); // Empty dependency array ensures the effect runs only once, like componentDidMount
  const [product, setProduct] = useState([]);
  // const{all_product}= useContext(ShopContext);
  // const product = all_product.find((e)=> e.id === Number(productId));
  console.log("🚀 ~ Products ~ product:", product);
  return (
    <div>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <Popular />
    </div>
  );
};

export default Products;
