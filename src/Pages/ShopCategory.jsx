import React, { useContext } from "react";
import './CSS/ShopCategory.css'
import { ShopContext } from "../Context/ShopContext";
import Item from '../components/Item/Item'

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
    return (
    
        <div className="shopcategory-products">
            {all_product.map((item,i)=>{
                if(props.category===item.category){
                    return<Item key={i} id={item.id} name={item.name} image={item.img} new_price={item.new_price} old_price={item.Old_price}/>
                }
                else{
                    return null;
                }
            })}
             <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
       
    )
}

export default ShopCategory