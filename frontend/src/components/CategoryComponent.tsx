import "./Category.css"
import Link from "next/link"
import Image from "next/image"
import indoor from "../assets/indoor.png"
import outdoor from "../assets/outdoor.png"
import showAll from "../assets/showall.png"

export default function Categories () {
    return(
        <section className="categories">
            <Link href="/indoor">
              <div className="category">
                <div className="circle"></div>
                <Image src={indoor} alt="indoor plant" width={400} height={400} className="category-img" layout="responsive"></Image>
                <h4 className="category-name">Indoor</h4>
              </div>
            </Link>
            <Link href="/outdoor">
              <div className="category">
                <div className="circle"></div>
                <Image src={outdoor} alt="outdoor plant" width={400} height={400} className="category-img" layout="responsive"></Image>
                <h4 className="category-name">Outdoor</h4>
              </div>
            </Link>
            <Link href="/all">
              <div className="category">
                <div className="circle"></div>
                <Image src={showAll} alt="white flowers" width={400} height={400} className="category-img" layout="responsive"></Image>
                <h4 className="category-name">Show All</h4>
              </div> 
            </Link> 
        </section>
    )
}