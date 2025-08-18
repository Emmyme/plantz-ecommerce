'use client'

import "./Cart.css"
import  { TextField, Button }  from "@mui/material"
import { useCart } from "../context/cart"
import DeleteIcon from '@mui/icons-material/Delete';


export default function CartComponent (): JSX.Element {
  

  const {cart} = useCart()
  let totalSum : number = 0


  for (let i = 0; i < cart.length; i++) {
    let price = (cart[i].price)
    totalSum += price}


    return (
        <div className="cart-component">
          <section className="cart-section">
            <ul>
              {cart.map((product): JSX.Element => 
                <>
                <li key="product.name" className="product-cart">
                  <img src={`/productImg/${product.image}`} alt="Image of product" className="cart-image"/>
                  <p>{product.name}</p>
                  <p>{product.price}:-</p>
                  <p></p>
                </li>
                </>
              )}
            </ul>
            <p className="total">Total: {totalSum}:-</p>
          </section>
          <form className="cart-form">
            <TextField id="outlined-basic" label="Name" variant="outlined" required/>       
            <TextField id="outlined-basic" label="Address" variant="outlined" required/>       
            <TextField id="outlined-basic" label="Postal Code" variant="outlined" required/>     
            <TextField id="outlined-basic" label="Phone Number" variant="outlined" required/>
            <TextField id="outlined-multiline-flexible" label="Comment" variant="outlined" rows={4} multiline/>

            <Button variant="contained" color="success">Place Order</Button>
          </form>
        </div>
    )

}