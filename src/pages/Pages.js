import React from "react";
import Layout from "../layout/Layout";
import { NavLink } from "react-router-dom";
const Pages = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row py-5">
          <div className="col text-center">
            <h1>Pages</h1>
            <div className="d-flex py-5 justify-content-center text-center align-items-center">
              <NavLink
                className="nav-link px-4 text-uppercase text-primary"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="nav-link px-4 text-uppercase text-primary"
                to="/products"
              >
                Products
              </NavLink>
              <NavLink
                className="nav-link px-4 text-uppercase text-primary"
                to="/cart"
              >
                Cart
              </NavLink>
              <NavLink
                className="nav-link px-4 text-uppercase text-primary"
                to="/pages"
              >
                Pages
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pages;
