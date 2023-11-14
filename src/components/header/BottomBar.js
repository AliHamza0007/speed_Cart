import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { FiMenu } from "react-icons/fi";
import "./BottomBar.css";

const CategoryURL = "https://dummyjson.com/products/categories";

const BottomBar = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = async () => {
    const { data } = await axios.get(`${CategoryURL}`);
    setCategory(data);
    // console.log(data)
  };
  return (
    <div className=" bg-light border shadow-bottom">
      <div className="container fontSize">
        <nav className="navbar  navbar-expand-lg">
          <div className="container-fluid ">
            <button
              className="navbar-toggler  "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* <div className="menuHide px-2">
              <FiMenu />
            </div> */}
            <select className="text-uppercase navLink from-select-light border-0">
              {category?.slice(0, 6).map((c, i) => (
                <option
                  className="text-uppercase bg-light navLink border-0"
                  key={i}
                >
                  {c}
                </option>
              ))}
              {/* <RiArrowDropDownLine /> */}
            </select>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav px-3">
                <li className="nav-item">
                  <NavLink
                    className="nav-link  navLink active"
                    aria-current="page"
                    to="/"
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link navLink " to="/products">
                    SHOP
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link navLink " to="/pages">
                    PAGES
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link navLink " to="#">
                    ELEMENTS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link navLink " to="/products">
                    BUY
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mr-0  text-end">
                <li className="nav-item">
                  <NavLink
                    className="nav-link  navOffer text-danger active"
                    aria-current="page"
                    to="/"
                  >
                    SPECIAL OFFER
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link navOffer " t0="#">
                    PURCHASE THEME
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BottomBar;
