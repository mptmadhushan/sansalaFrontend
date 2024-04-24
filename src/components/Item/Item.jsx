import React from "react";
import './Item.css'
const Item = (props) => {
    console.log("🚀 ~ Item ~ props:", props)
    return(
        <div className="item">
            {/* <Link to={'/product/${props.id}'}><img onClick={window.scrollTo(0,0)}src={props.image} alt="" /></Link> */}
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    {props.new_price}
                </div>
                <div className="irem-price-old">
                    {props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item