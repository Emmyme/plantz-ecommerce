import Footer from "../../components/FooterComponent"
import Header from "../../components/HeaderComponent"
import CartComponent from "../../components/CartComponent"

export default function Cart() {
    return (
      <>
        <Header></Header>
        <main>
        <CartComponent></CartComponent>
        </main>
        <Footer></Footer>
      </>
    );
  }