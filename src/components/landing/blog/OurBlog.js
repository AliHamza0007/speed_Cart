import React from "react";
import "./OurBlog.css";
const img1 =
  "https://cdn.pixabay.com/photo/2020/05/31/04/36/investment-5241253_1280.jpg";
const img2 =
  "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg";
const img3 =
  "https://cdn.pixabay.com/photo/2015/04/10/17/03/pots-716579_1280.jpg";
const OurBlog = () => {
  return (
    <div className="container">
      <div className="row py-3">
    
        <h2 className="topCategoryHeading">Our Blogs</h2>
        {/* bottom bar */}
        <div
          className="progress"
          role="progressbar"
          aria-label="Warning striped example"
          aria-valuenow={15}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="progress-bar progress-bar-striped bg-primary"
            style={{ width: "15%" }}
          />
        </div>
      </div>
      <div className="row pb-5">
        <div className="col-md-4 p-md-2">
          <div className="card py-md-3 text-center">
            <img className="card-img-top" src={img1} alt="Blog" />
            <div className="badge-bottom px-2">Design Trends,Decorate</div>
            <div className="card-title pt-5 pb-3">
              Furniture that Explores wood as a material
            </div>
            <div className="card-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </div>
            <div className="card-text py-3 text-uppercase text-danger">
              Continue Reading
            </div>
          </div>
        </div>
        <div className="col-md-4 p-md-2">
          <div className="card py-md-3 text-center">
            <img className="card-img-top" src={img1} alt="Blog" />
            <div className="badge-bottom px-2">Design Trends,Furniture</div>
            <div className="card-title pt-5 pb-3">
              Furniture that Explores wood as a material
            </div>
            <div className="card-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </div>
            <div className="card-text py-3 text-uppercase text-danger">
              Continue Reading
            </div>
          </div>
        </div>
        <div className="col-md-4 p-md-2">
          <div className="card py-md-3 text-center">
            <img className="card-img-top" src={img1} alt="Blog" />
            <div className="badge-bottom px-2">Design Trends,Decoration</div>
            <div className="card-title  pt-5 pb-3">
              Furniture that Explores wood as a material
            </div>
            <div className="card-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </div>
            <div className="card-text py-3 text-uppercase text-danger">
              Continue Reading
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
