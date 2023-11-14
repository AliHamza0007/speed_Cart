import React from "react";
const mpp1 =
  "https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg";
const mpp2 =
  "https://cdn.pixabay.com/photo/2018/03/16/13/57/no-one-3231308_1280.jpg";
const MostPopular = () => {
  return (
    <div className="container py-2">
      <div className="row py-2 bg-light shadow text-center">
        <div className="col-md-9 col-12 ">
          <img
            src={mpp1}
            alt="Most Popular Product"
            className=" img img-fluid w-100 h-100"
          />
        </div>
        <div className="col-md-3 col-12 ">
          <div className="py-md-5 p-1">
            <h4 className="text-uppercase py-1 text-primary">Most Popular</h4>
            <p className=" pb-1">Wonder let Lorem LAmp for All times</p>
            <img
              src={mpp2}
              alt="Most Popular rounded Product"
              className=" img img-fluid w-75 py-3 h-50"
            />
            <h6>Floor Lamp</h6>
            <p className="text-danger">$118.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
