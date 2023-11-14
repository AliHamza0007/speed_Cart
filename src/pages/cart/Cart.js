import React from "react";
import { useCart } from "../../context/useCart";
import Layout from "../../layout/Layout";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const { cart, getTotal, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
  if (cart?.length === 0) {
    setTimeout(() => {
      navigate("/products");
    }, 5000);
  }

  return (
    <Layout>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col text-center">
            <h4>{cart?.length} Products  in Cart</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="cart-items  py-2">
              {cart.map((product) => (
                <div
                  className="cart-item row p-2 border border-danger"
                  key={product.id}
                >
                  <img
                    className="cart-img col-md-6 col-12 "
                    src={product.images[0]}
                    alt={product.title}
                  />
                  <div className="cart-item-details  justify-items-center align-items-center text-center col-md-6 col-12">
                    <h5 className="cart-item-name">
                      {product.title.substring(0, 10)}
                    </h5>
                    <p className="cart-item-price text-danger">
                      ${product.price}
                    </p>
                    <div className="cart-item-quantity">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => decreaseQuantity(product.id)}
                      >
                        -
                      </button>
                      <span className="cart-item-quantity-value px-2">
                        {product.quantity}
                      </span>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => increaseQuantity(product.id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="   btn btn-danger  mt-3"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4 py-3">
            <div className="text-center py-5 border border-primary">
              <h4 className="mb-4">Cart Summary</h4>
              <div className="d-flex px-3 justify-content-between mb-3">
                <span>Subtotal:</span>
                <span>${getTotal()}</span>
              </div>
              <button className="btn btn-primary btn-block">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
