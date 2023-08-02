import React from "react";
import Header from "../Components/Header/Header";
import Swiper from "../Components/Swiper/Swiper";
import Category from "../Components/Category/Category";
import Supplier from "../Components/Supplier/Supplier";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Swiper />
      <Category />
      <Supplier />
    </div>
  );
};

export default HomePage;
