import "./Hero.css"
import Image from "next/image"
import heroImg from "../assets/heroimg.png"


export default function Hero () {
    return(
        <section className="hero">
            <h2>Plants for every home.</h2>
            <div className="heroImg">
              <Image
              src={heroImg}
              alt="Image of different kinds of 3D plants"
              width={900}
              height={900}
              layout="responsive">
              </Image>
            </div>
            
        </section>
    )
}