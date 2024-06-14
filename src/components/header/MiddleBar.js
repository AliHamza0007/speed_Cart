import React from "react";
import { NavLink } from "react-router-dom";
import { BsSearch, BsFillBagFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import "./MiddleBar.css";
import logo from "../../assets/logos/logo.png";
import { useCart } from "../../context/useCart";

const MiddleBar = () => {
  const { cart, getTotal } = useCart();
  return (
    <div className="container text-white">
      <div className="row">
        <nav className="navbar navbar-expand-lg  ">
          <div className="container-fluid">
            <img
              className="img img-fluid px-3 logo"
              src={logo}
              alt="Speed Cart"
            />

               <form className="   searchBar " role="search">
              <input
                className="searchInput"
                type="search"
                placeholder="Search for products"
                aria-label="Search"
              />

              <select className="selectCategory">
                <option>Bags</option>
                <option>Laptops</option>
                <option>Pc</option>
              </select>
              <button className="searchBtn " type="submit">
                <BsSearch className="searchIcon" />
              </button>
            </form>
           
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav text-end me-auto ">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-white"
                    aria-current="page"
                    to="#"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="#">
                    Register
                  </NavLink>{" "}
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="#">
                    <AiOutlineHeart />
                  </NavLink>{" "}
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white " to="/cart">
                    <div className="text-white position-relative">
                      <BsFillBagFill />
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart?.length}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link font-bold text-white" to="/cart">
                    ${getTotal()}
                  </NavLink>{" "}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MiddleBar;
