import React from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import "./AllForGarden.css";
import { useProducts } from "../../../context/useProducts";
import { useCart } from "../../../context/useCart";
import { Link } from "react-router-dom";

const AllForGarden = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();
  return (
    <div className="container ">
      <div className="row pt-3  justify-content-center align-items-center text-center">
        <div className="col-10 d-flex align-items-center productsHeading ">
          <p className="px-2">All For Garden</p>
          <p className="text-danger px-2">new</p>
          <p className=" px-2">featured</p>
          <p className=" px-2">Top Sellers</p>
        </div>

        <div className="col-2 d-flex">
          <FcPrevious />
          <FcNext />
        </div>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Warning striped example"
        aria-valuenow={15}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-bar progress-bar-striped bg-warning"
          style={{ width: "15%" }}
        />
      </div>
      {/* cards */}
      <div className="row py-2 d-flex ">
        {products?.slice(0, 5).map((product) => (
          <div key={product.id} className="col text-center ">
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
                <button
                  onClick={() => addToCart(product)}
                  className="btn btn-warning font06"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row text-white ">
        <div className="col-md-6   col-12 p-2">
          <div className="  imgBG1">
            <div className="content px-2 py-4">
              <p className="text-danger">A bcd EFCGE</p>
              <h4>New Arrival of </h4>
              <h4>Modern Garden Gloves</h4>
              <button className="btn  border-bottom border-secondary">
                View More
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6   col-12 p-2">
          <div className="imgBG1 ">
            <div className="content px-2 py-4">
              <p className="text-danger">A bcd EFCGE</p>
              <h4>New Arrival of </h4>
              <h4>Modern Garden Gloves</h4>
              <button className="btn  border-bottom border-secondary">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllForGarden;
