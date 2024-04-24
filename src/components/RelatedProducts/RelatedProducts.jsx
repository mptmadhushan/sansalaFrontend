import React from "react";
import './RelatedProducts.css'
import data_product from "../Assets/data";
const RelatedProducts = () =>{
    return(
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr/>
            <div className="relatedproducts-items">
                {data_product.map(()=>{
                    // return <Item key={i} id={item.id} name={item.name} image={item.img} new_price={item.new_price} old_price={item.Old_price}/>
                })}
            </div>
        </div>
    )
}

export default RelatedProducts