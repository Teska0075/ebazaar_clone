import React from "react";
import Header from "../Components/Header/Header";
import Swiper from "../Components/Swiper/Swiper";
import Category from "../Components/Category/Category";
import Supplier from "../Components/Supplier/Supplier";
import Marathon from "../Components/Marathon/Marathon";

const HomePage = () => {
  return (
    <div>
      {/* <Header /> */}
      <Swiper />
      <Category />
      <Supplier />
      <Marathon/>
    </div>
  );
};

export default HomePage;
