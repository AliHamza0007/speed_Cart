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
    <div id="carouselExampleDark" data-bs-ride="carousel"  class="carousel carousel-light text-light slide"   >
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
  
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="4000">
        <img src={img1} class="d-block w-100" alt="Product 1" />
        <div class="carousel-caption mb-5">
          <h4 class="frameStyle">Premium Quality</h4>
          <h2>Modern Sofa Set</h2>
          <h2>Transform Your Living Space</h2>
          <button onClick={() => navigate("/products")} class="btn sliderBtn px-3 btn-danger">View Details</button>
          <button onClick={() => navigate("/products")} class="btn text-white border border-light px-3 btn-outline-primary sliderBtn">Shop Now</button>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="4000">
        <img src={img2} class="d-block w-100" alt="Product 2" />
        <div class="carousel-caption mb-5">
          <h4 class="frameStyle">Elegant Design</h4>
          <h2>Luxury Dining Set</h2>
          <h2>Elevate Your Dining Experience</h2>
          <button onClick={() => navigate("/products")} class="btn sliderBtn px-3 btn-danger">View Details</button>
          <button onClick={() => navigate("/products")} class="btn text-white px-3 btn-outline-primary sliderBtn">Shop Now</button>
        </div>
      </div>
    </div>
  
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  
 
  );
};

export default Slider;
