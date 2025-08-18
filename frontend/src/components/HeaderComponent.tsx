import "./Header.css"
import Image from "next/image"
import Link from "next/link"
import cartImg from "../assets/cart.svg"

export default function Header () {
    return(
        <header>
            <Link href="/">
              <h3 className="header-text">PLANTZ.</h3> 
            </Link>
            <Link href="/cart" className="cart-nav">
              <Image src={cartImg} height={40} width={40} alt="go to cart" className="cart-icon"></Image>
            </Link>
        </header>
    )
}