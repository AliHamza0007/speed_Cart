import { utilsProducts } from "../utils";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
// const URL = "https://dummyjson.com/products";
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const getProduct = async () => {
    // const { data } = await axios.get(URL);
    // data&&setProducts(data):
    setProducts(utilsProducts);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
const useProducts = () => useContext(ProductContext);
export { ProductProvider, useProducts };
