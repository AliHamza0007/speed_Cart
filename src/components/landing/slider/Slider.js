import React from "react";
import "./Slide.css";
import { useNavigate } from "react-router-dom";
const img1 =
  "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg";
const img2 =
  "https://media.istockphoto.com/id/1430209081/photo/living-room-with-leather-sofa-and-leather-armchair-on-empty-dark-green-wall-background.webp?s=1024x1024&w=is&k=20&c=LBHgGFivodpb8TndVfbO_ZQ2K7xKwzXo872GzCM38YI=";
const Slider = () => {
  const navigate = useNavigate();
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-light text-light slide"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <div className="carousel-inner">
        <div className="carousel-item active " data-bs-interval={10000}>
          <img src={img1} className="d-block w-100" alt="..." />
          <div className="carousel-caption mb-5 ">
            <h4 className="frameStyle">Coated Aluminum Frame</h4>
            <h2>Reddington 6 Piece Set Furniture</h2>
            <h2>Sectional Living Room Sofa</h2>
            <button
              onClick={() => navigate("/products")}
              className="btn sliderBtn px-3 btn-danger  "
            >
              View More
            </button>
            <button
              onClick={() => navigate("/products")}
              className="btn text-white border border-light px-3 btn-outline-primary  sliderBtn "
            >
              To Shop
            </button>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval={2000}>
          <img src={img2} className="d-block w-100" alt="..." />
          <div className="carousel-caption mb-5 ">
            <h4 className="frameStyle">Coated Aluminum Frame</h4>
            <h2>Reddington 6 Piece Set Furniture</h2>
            <h2>Sectional Living Room Sofa</h2>
            <button
              onClick={() => navigate("/products")}
              className="btn sliderBtn px-3 btn-danger  "
            >
              View More
            </button>
            <button
              onClick={() => navigate("/products")}
              className="btn text-white px-3 btn-outline-primary  sliderBtn "
            >
              To Shop
            </button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
