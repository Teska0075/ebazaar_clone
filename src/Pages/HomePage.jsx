import React from "react";

import Swiper from "../Components/Swiper/Swiper";
import Category from "../Components/Category/Category";
import Supplier from "../Components/Supplier/Supplier";
import Marathon from "../Components/Marathon/Marathon";
import SpecialProducts from "../Components/SpecialProducts/SpecialProducts";

const HomePage = () => {
  return (
    <div>
      <Swiper />
      <Category />
      <Supplier />
      <Marathon />
      <SpecialProducts />
    </div>
  );
};

export default HomePage;
