
import './Items.css'
import Card from '@mui/material/Card'
import { useState, useEffect } from 'react'
import ItemView from './ItemView'
import Dialog from '@mui/material/Dialog'

export default function Items ({category}: {category: string}): JSX.Element {

  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({})

  useEffect(() => {
      fetch(`http://localhost:8080/${category}`)
          .then((response) => response.json())
          .then((data) => setProducts(data));
  }, );
  


    return(
        <section>
            <ul className='item-list'>
               {products.map((item): JSX.Element  => 
                 <li key={item['id']}>
                    <Card className='card' onClick={() => {setSelectedProduct(item); setOpen(true)}}>
                      <img src={`/productImg/${item['image']}`} alt='Picture of plant' className='item-image'/>
                      <h3>{item['name']}</h3>
                      <h4 className='item-price'>{item['price']}:-</h4>
                   </Card>
                 </li>

               )}
            </ul>

            <Dialog open={open} onClose={() => setOpen(false)} className="dialog-window" fullWidth><ItemView {...selectedProduct}></ItemView></Dialog>
            
        </section>
    )
}