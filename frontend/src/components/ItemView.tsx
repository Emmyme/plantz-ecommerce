
import './Item.css'
import React, { useState } from 'react';
import { useCart, Item } from '../context/cart';



export default function ItemView ({image, name, price, id}: Item) : JSX.Element {
    const [isAdded, setIsAdded] = useState(false)
    let product: Item = {image, name, price, id}
  
     const { cart, addToCart } = useCart()

     

     function onAdded() {
        addToCart(product)
        setIsAdded(true)

     }

    return(
        <>
        <section className="selected-product">
            <img src={`/productImg/${image}`} alt="Image of product" className="selected-image"/>
            <h4 className="selected-name">{name}</h4>
            <h4 className="selected-price">{price}:-</h4>
            <h4 className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Morbi porttitor turpis erat, sed pretium ligula finibus ac.  
                Curabitur a nisl.</h4>
                {!isAdded ? (<button className="add-button" onClick={onAdded}>Add</button>) : (<h4 className="was-added">Product was added to cart!</h4>)}   
            
        </section>
        </>
    )
}