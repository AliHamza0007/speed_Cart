import React from "react";
import "./Footer.css";
const img1 =
  "https://w7.pngwing.com/pngs/30/487/png-transparent-google-play-app-store-google-angle-text-logo-thumbnail.png";
const img2 =
  "https://w7.pngwing.com/pngs/30/346/png-transparent-app-store-iphone-android-apple-electronics-text-logo-thumbnail.png";
const Footer = () => {
  return (
    <div className=" footer">
      <div className="container text-center footer">
        <div className="row py-4">
          <div className="col-md-2 col-6">
            <h6>Our Stories</h6>
            <p>Lahore</p>
            <p>Lahore</p>
            <p>Lahore</p>
            <p>Lahore</p>
            <p>Lahore</p>
            <p>Lahore</p>
          </div>
          <div className="col-md-2 col-6">
            <h6>Our Stories</h6>
            <p>Lahore</p>
            <p>Lahore</p>
            <p>Lahore</p>
            <p>Lahore</p>
            <p>Lahore</p>
            <p>Lahore</p>
          </div>
          <div className="col-md-2 col-6">
            <h6>Our Stories</h6>
            <p>Lahore</p>
            <p>Lahore</p>
            <p>Lahore</p>
            <p>Lahore</p>
            <p>Lahore</p>
            <p>Lahore</p>
          </div>
          <div className="col-md-2 col-6">
            <h6>Our Stories</h6>
            <p>Lahore</p>
            <p>Lahore</p>
            <p>Lahore</p>
            <p>Lahore</p>
            <p>Lahore</p>
            <p>Lahore</p>
          </div>
          <div className="col-md-4 col-12">
            <h5>Available On</h5>
            <div className="row py-2">
              <div className="col-6">
                <img
                  src={img1}
                  className="img img-fluid"
                  alt="Google Play Store"
                />
              </div>
              <div className="col-6">
                <img src={img2} className="img img-fluid" alt="App Store" />
              </div>
            </div>
            <h6>Join Our NewsLetter</h6>
            <p>
              Will be in Accordance with{" "}
              <span className="text-danger">Privacy Policy</span>
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <input
                type="text"
                placeholder="Your Email"
                className="d-inline text-center w-100 py-2 inputEmail"
              />
              <button className="btn mx-2 text-danger btn-warning px-3 inputEmail">
                SignUp
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row text-center py-2 justify-content-center align-items-center m-auto">
          <h6>ExploreLogics &copy; ALL RIGHT RESERVED 2023</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
