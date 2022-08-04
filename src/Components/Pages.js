import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route ,Navigate } from 'react-router-dom'
import { Home } from './Home'
import { ProductItem } from './ProductItem'
import { Product } from './Product'
import { Cart } from './Cart'
import { Error } from "./Error";
import { Navbar } from "./Navbar"
import { GlobalContext } from './Context/GlobalContext';
import { Data} from './Context/Data'

export function Pages() {
  const { recieveProducts, products } = useContext(GlobalContext);
 
  useEffect(() => {
  recieveProducts(Data);
    // console.log(data);
    
  }, []);

  return (<>
    {
      products.length > 0 ? (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Product category='men' />} />
            <Route path="/women" element={<Product category='women' />} />
            <Route path="/kids" element={<Product category='kids' />} />
            
            <Route path="/cart" element={<Cart />} />
            <Route path="/productitem/:id" element={<ProductItem />} />
            <Route path="*" element={<Error />} />

          </Routes>
        </BrowserRouter>
       ) : (
        <p>Fetching data...</p>
      )
    } 
 </> );
}

