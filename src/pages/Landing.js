import React from "react";
import Layout from "../layout/Layout";
import Slider from "../components/landing/slider/Slider";
import Category from "../components/landing/category/Category";
import SpecialOffers from "../components/landing/Offers/SpecialOffers";
import MostPopular from "../components/landing/mostPopular/MostPopular";
import FavoriteGreen from "../components/landing/mostPopular/FavouriteGreen";
import Option from "../components/landing/option/Option";
import AllForGarden from "../components/landing/allForGarden/AllForGarden";
import OurBlog from "../components/landing/blog/OurBlog";
import ForTravelers from "../components/landing/Offers/ForTravelers";

const Landing = () => {
  return (
    <Layout>
      <Slider />
      <Category name="Top Category" />
      <SpecialOffers />
      <MostPopular />
      <FavoriteGreen />
      <Option />
      <ForTravelers />
      <AllForGarden />
      <Category name="Furniture Category" />
      <OurBlog />
    </Layout>
  );
};

export default Landing;
