import React from "react";
import "./Option.css";
const Option = () => {
  return (
    <div className="container fontSize py-3">
      <div className="row">
        <div className="col-3">
          <div className="row d-flex ">
            <div className="col-2  fontList">1.</div>
            <div className="col-10">
              <p className="fontBig">Home Delivery</p>
              <p className="fontSmall">The European Language</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row d-flex">
            <div className="col-2  fontList">2.</div>
            <div className="col-10">
              <div className="row">
                <p className="fontBig">Order As A Gift</p>
              </div>
              <div className="row">
                <p className="fontSmall">The European Language</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row d-flex">
            <div className="col-2  fontList">3.</div>
            <div className="col-10">
              <p className="fontBig">Hight Quality</p>
              <p className="fontSmall">The European Language</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row d-flex">
            <div className="col-2  fontList">4.</div>
            <div className="col-10">
              <p className="fontBig">Buy with joy</p>
              <p className="fontSmall">The European Language</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Option;
