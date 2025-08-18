'use client'

import Footer from "../../components/FooterComponent"
import Header from "../../components/HeaderComponent"
import ItemComponent from '../../components/ItemComponent'

export default function Category() {
    return (
      <>
      <Header></Header>
        <main>
          <ItemComponent category={'2'}></ItemComponent>
        </main>
        <Footer></Footer>
      </>
    );
  }