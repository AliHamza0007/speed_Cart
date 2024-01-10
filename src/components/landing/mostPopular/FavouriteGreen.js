import React from "react";
const mpp1 =
  "https://cdn.pixabay.com/photo/2015/04/10/17/03/pots-716579_1280.jpg";
const mpp2 =
  "https://cdn.pixabay.com/photo/2023/10/21/21/55/flowers-8332722_1280.jpg";
const FavoriteGreen = () => {
  return (
    <div className="container py-2">
      <div className="row py-2 bg-light shadow text-center">
        <div className="col-md-3 col-12 ">
          <div className="py-md-5 p-1">
            <h4 className="text-uppercase py-1 text-primary">
              Favourite Green
            </h4>
            <p className=" pb-1">Wonder let Lorem LAmp for All times</p>
            <img
              src={mpp2}
              alt="Most Popular rounded Product"
              className=" img img-fluid w-75 py-3 h-50"
            />
            <h6>Garden Showel</h6>
            <p className="text-danger">$118.00</p>
          </div>
        </div>
        <div className="col-md-9 col-12 ">
          <img
            src={mpp1}
            alt="Most Popular Product"
            className=" img img-fluid w-100 h-100"
          />
        </div>
      </div>
    </div>
  );
};

export default FavoriteGreen;
