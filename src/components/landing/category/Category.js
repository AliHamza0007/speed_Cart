import React from "react";
import "./Category.css";
import { useProducts } from "../../../context/useProducts";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/useCart";

// ********************************** constant Data
// const Top1 =
//   "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg";
// const Top2 = "https://cdn.pixabay.com/photo/2017/08/02/11/38/smartphone-2571128_1280.jpg";
// const Top3 = "https://cdn.pixabay.com/photo/2016/12/08/11/50/time-1891569_1280.png";
// const Top4 = "https://cdn.pixabay.com/photo/2019/06/18/06/05/chair-4281517_1280.png";

// const Top6 = "https://cdn.pixabay.com/photo/2021/08/03/06/47/clock-6518632_1280.jpg";
// const Top5 = "https://cdn.pixabay.com/photo/2018/03/14/23/33/sunglasses-3226705_1280.jpg";

const Category = ({ name }) => {
  const { products } = useProducts();
  const { addToCart } = useCart();
  return (
    <div className="container py-2">
      <h2 className="topCategoryHeading">{name}</h2>
      {/* Bottom-Bar */}

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
      {/* Dyanmic Data */}

      <div className="row py-2">
        {products?.slice(0, 6).map((product) => (
          <div
            key={product.id}
            className="col-lg-2  col-md-4 col-6 text-center"
          >
            <div className="card">
              <Link className="nav-link" to={`/detail/${product.id}`}>
                {" "}
                <img
                  src={product.images[0]}
                  className="card-img-top img-fluid img-responsive"
                  alt={product.title}
                />
              </Link>

              <div className="card-body font1">
                <p className="card-title ">{product.title.substring(0, 7)}</p>
                <p className="card-text  ">{product.stock} Products</p>
                <p className="card-text text-danger ">${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="btn btn-warning  font1"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Constant Data */}
      {/* <div className="row  py-3 text-center">
      
        <div className="col-lg-2 col-md-3 col-6">
      
          <div className="card">
            <img src={Top1} className=" card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-uppercase">Laptop </h5>
              <p className="card-text">12 Products </p>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-3 col-6">
          <div className="card">
            <img src={Top2} className=" card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-uppercase">Phone </h5>
              <p className="card-text">112 Products </p>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-3 col-6">
          <div className="card">
            <img src={Top3} className=" card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-uppercase">Wall Clock </h5>
              <p className="card-text">2 Products </p>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-3 col-6">
          <div className="card">
            <img src={Top4} className=" card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-uppercase">Chair </h5>
              <p className="card-text">52 Products </p>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-3 col-6">
          <div className="card">
            <img src={Top5} className=" card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-uppercase">Glassess </h5>
              <p className="card-text">32 Products </p>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-3 col-6">
          <div className="card">
            <img src={Top6} className=" card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-uppercase">Watch </h5>
              <p className="card-text">92 Products </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Category;
