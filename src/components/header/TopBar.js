import React from "react";
import "./TopBar.css";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { BsTelegram } from "react-icons/bs";
import { FaPinterestSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
const TopBar = () => {
  return (
    <div className="border-bottom border-secondary">
      <div className="container fontSize  text-white">
        <div className=" row  justify-content-center align-items-center text-center">
          <div className="col-6 ">
            <div className="row">
              <div className="col-md-2 border-start  border-secondary ">
                <select className="slectBG ">
                  <option>ENG</option>
                  <option>UR</option>
                  <option>PU</option>
                  <option>GER</option>
                </select>
              </div>
              <div className="col-md-2 border-start border-secondary ">
                <select className="slectBG ">
                  <option>UK</option>
                  <option>PAK</option>
                  <option>GER</option>
                </select>
              </div>
              <div className="col-md-8 border-start ">
                <div className="text-white text-start sizeAdjust">
                
                   FREE SHIPPING FOR ALL ORDERS OF $150
                
                </div>
              </div>
            </div>
          </div>

          <div className="col-6  ">
            <div className="row justify-content-center align-items-center text-center">
              <div className="col-md-4  text-end-md ">
                <span className="icon">
                  <BiLogoFacebook />
                </span>

                <span className="icon">
                  <BiLogoTwitter />
                </span>
                <span className="icon">
                  <FaPinterestSquare />
                </span>
                <span className="icon">
                  <BsTelegram />
                </span>
                <span className="icon">
                  <BiLogoLinkedin />
                </span>
              </div>
              <div className="col-md-4   border-start border-secondary">
                <span className="icon ">
                  <AiOutlineMail size="17px" />
                </span>
                <span className="icon ">
                  <Link className="nav-link d-inline " to="#">
                    NEWSLETTER
                  </Link>
                </span>
              </div>
              <div className="col-md-3  border-start border-secondary ">
                <Link className="nav-link" to="#">
                  CONTACT US
                </Link>
              </div>
              <div className="col-md-1  border-start border-secondary">
                <Link className="nav-link" to="#">
                  FAQS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
