import React from "react";
import { useProducts } from "../../../context/useProducts";
import { FcNext, FcPrevious } from "react-icons/fc";
import "./Offers.css";
import { Link } from "react-router-dom";
import {useCart} from '../../../context/useCart'
const img1 =
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/computer-or-multipurpose-sale-product-sale-red-poster-template-a1e80f39cbb8fce17bcf27011f9dfbf3_screen.jpg?ts=1636966672";

const SpecialOffers = () => {
  const { products } = useProducts();
  const { addToCart} = useCart();
  return (
    <div className="container  py-2  ">
      <div className="row  p-2">
        {/* first sale product */}

        <div className="col-lg-4 col-md-4 col-12  border border-danger p-2  ">
          <div className="row justify-content-center align-items-center px-2 ">
            <h5 className="text-uppercase  col-10">Sale Products</h5>
            <h5 className="col-2 d-flex">
              <FcPrevious />
              <FcNext />
            </h5>
            <img
              src={img1}
              className="img-img-fluid py-md-5 py-1 img1 "
              alt="Sale Product"
            />
          </div>
        </div>
        {/* first sale product end */}

        <div className="col-lg-8 col-md-8 col-12 ">
          <div className="row pt-3   justify-content-center align-items-center text-center">
            <div className="col-10 d-flex align-items-center  ">
              <p className="">Special Offer</p>
              <p className="text-danger px-3">new</p>
              <p className=" px-3">featured</p>
              <p className=" px-3">Top Sellers</p>
            </div>

            <div className="col-2 d-flex">
              <FcPrevious />
              <FcNext />
            </div>
          </div>
          {/* progress bar */}
          <div
            className="progress "
            role="progressbar"
            aria-label="Warning striped example"
            aria-valuenow={20}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar progress-bar-striped bg-danger"
              style={{ width: "20%" }}
            />
          </div>
          {/* card */}
          <div className="row py-2 d-flex ">
            {products?.slice(0, 6).map((product) => (
              <div key={product.id} className="col-md-4 col-6 text-center ">
                <div className="card">
                  <Link className="nav-link" to={`/detail/${product.id}`}>
                    <img
                      src={product.images[0]}
                      className="card-img-top img-fluid img-responsive"
                      alt={product.title}
                    />
                  </Link>

                  <div className="card-body font06 ">
                    <p className="card-title  ">{product.title.substring(0, 10)}</p>
                    <p className="card-text text-danger ">${product.price}</p>
                    <button onClick={()=>addToCart(product)} className="btn btn-primary font06">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="row pt-3 text-center ">
            <div className="col-4">
              <div className="card">
                <img src={Top1} className=" card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-title ">Laptop </p>
                  <p className="card-text">2 Products </p>
                  <p className="card-text text-danger">$30.00 </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img src={Top2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-title  ">Phone </p>
                  <p className="card-text">12 Products </p>
                  <p className="card-text text-danger">$50.00 </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img
                  src={Top3}
                  className=" card-img-top img img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-title  ">Wall Clock</p>
                  <p className="card-text">20 Products </p>
                  <p className="card-text text-danger">$15.00 </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-1 text-center ">
            <div className="col-4">
              <div className="card">
                <img src={Top4} className=" card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-title  ">chair </p>
                  <p className="card-text">32 Products </p>
                  <p className="card-text text-danger">$40.00 </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img src={Top5} className=" card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-title  ">glassess </p>
                  <p className="card-text">112 Products </p>
                  <p className="card-text text-danger">$5.00 </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img src={Top6} className=" card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-title  text-uppercase">watch </p>
                  <p className="card-text">200 Products </p>
                  <p className="card-text text-danger">$13.00 </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
