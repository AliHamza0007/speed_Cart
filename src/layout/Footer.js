import React from "react";
import "./Footer.css";
const img1 =
  "https://w7.pngwing.com/pngs/30/487/png-transparent-google-play-app-store-google-angle-text-logo-thumbnail.png";
const img2 =
  "https://w7.pngwing.com/pngs/30/346/png-transparent-app-store-iphone-android-apple-electronics-text-logo-thumbnail.png";
const Footer = () => {
  return (
    <footer className="footer  py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <h5 className="mb-4">Company</h5>
          <ul className="list-unstyled">
            <li><a className="text-light" href="#">About Us</a></li>
            <li><a className="text-light" href="#">Contact Us</a></li>
            <li><a className="text-light" href="#">Careers</a></li>
            <li><a className="text-light" href="#">Press</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <h5 className="mb-4">Customer Service</h5>
          <ul className="list-unstyled">
            <li><a className="text-light" href="#">Help & FAQ</a></li>
            <li><a className="text-light" href="#">Shipping & Returns</a></li>
            <li><a className="text-light" href="#">Track My Order</a></li>
            <li><a className="text-light" href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <h5 className="mb-4">Connect With Us</h5>
          <ul className="list-unstyled">
            <li><a className="text-light" href="#"><i className="bi bi-facebook"></i> Facebook</a></li>
            <li><a className="text-light" href="#"><i className="bi bi-twitter"></i> Twitter</a></li>
            <li><a className="text-light" href="#"><i className="bi bi-instagram"></i> Instagram</a></li>
            <li><a className="text-light" href="#"><i className="bi bi-linkedin"></i> LinkedIn</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <h5 className="mb-4">Available On</h5>
          <div className="row">
            <div className="col-6">
              <img src={img1} className="img-fluid mb-3" alt="Google Play Store" />
            </div>
            <div className="col-6">
              <img src={img2} className="img-fluid mb-3" alt="App Store" />
            </div>
          </div>
          <p className="mb-3">Join Our Newsletter!</p>
          <div className="input-group mb-3">
            <input type="email" className="form-control py-2" placeholder="Your Email" aria-label="Your Email" />
            <button className="btn btn-orange py-2" type="button">SIGN UP</button>
          </div>
          <p>Will be used in accordance with our <span className="text-orange">Privacy Policy</span>.</p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="row text-center">
        <div className="col">
          <p>&copy; 2023 ExploreLogics. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
