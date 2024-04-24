import React from "react";
import './NewCollection.css'
import new_collections from '../Assets/new_collections'
const NewCollection = () => {
    return(
        <div className="new-collection">
            <h1>New Collections</h1>
            <hr/>
            <div className="collections">
              {new_collections.map((item,i)=>{
                return <item key={i} id={item.id} name={item.name} image={item.img} new_price={item.new_price} old_price={item.Old_price}/>
            })}
            </div>
        </div>
    )
}

export default NewCollection