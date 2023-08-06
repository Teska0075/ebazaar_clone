import React from "react";

import Swiper from "../Components/Swiper/Swiper";
import Category from "../Components/Category/Category";
import Supplier from "../Components/Supplier/Supplier";
import Marathon from "../Components/Marathon/Marathon";
import SpecialProducts from "../Components/SpecialProducts/SpecialProducts";
import Layout from "../Layout";

const HomePage = () => {
  return (
    <Layout>
      <Swiper />
      <Category />
      <Supplier />
      <Marathon />
      <SpecialProducts />
    </Layout>
  );
};

export default HomePage;
