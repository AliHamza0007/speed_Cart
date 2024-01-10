import React from "react";
import "./Products.css";
import { useProducts } from "../context/useProducts";
import Layout from "../layout/Layout";
import { useCart } from "../context/useCart";

const Products = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();

  return (
    <Layout>
      <div className="container py-3 text-center">
        <div className="row">
          {products?.map((product) => (
            <div key={product.id} className="col-md-3  cardBox col-6 ">
              <div className="card ">
                <img
                  src={product.images[0]}
                  className="card-img-top img img-fluid img-responsive"
                  alt={product.title}
                />
                <div className="card-body fontSmall06 font1 ">
                  <p className="card-title">{product.title.substring(0, 12)}</p>
                  <p className="card-text">Quantity:{product.stock}</p>
                  <p className="card-text text-danger">${product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="btn btn-primary fontSmall06 font1 "
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
