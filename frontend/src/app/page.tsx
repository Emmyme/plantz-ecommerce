import Header from "../components/HeaderComponent"
import Hero from "../components/HeroComponent"
import Footer from "../components/FooterComponent"
import Categories from "../components/CategoryComponent"
import Image from "next/image"
import pageDecoration from "../assets/page-decoration.png"

export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <main>
        <Categories></Categories>
      </main>
      <Image src={pageDecoration} alt="plants" style={{width: '100%', height: 'auto', position: 'relative', margin: '-0.5rem 0'}} ></Image>
      <Footer></Footer>
    </>
  );
}
