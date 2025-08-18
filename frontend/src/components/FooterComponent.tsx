'use client'
import "./Footer.css"
import { useState } from 'react'

export default function Footer () {

    
   
    return(
        <footer>
            <form className="subscribe-form" method="POST" action="http://localhost:8080/subscribe">
              <input type="text" placeholder="Subscribe to our newsletter!" name="email" className="email-field" required></input>
              <input type="submit" value="Submit" className="submit-button" ></input>
            </form>
            <h4>Emelie Berg</h4>
            <h4>Plantvalley 205</h4>
            <h4>+123 - 456 78 90</h4>
            <h4></h4>
          
            
        </footer>
    )
}