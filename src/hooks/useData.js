import React, { useState, useEffect } from "react";
import axios from "axios";

const useData = () => {
  const [bannerData, setBannerData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [suppliersData, setSuppliersData] = useState([]);
  const [productsData, setProductsData] = useState([]);

  const getPageData = async () => {
    try {
      const result = await axios.get(
        "https://api.ebazaar.mn/api/pages?page_id=1",
        {
          headers: { ebazaar_token: process.env.REACT_APP_SUPPLIER_TOKEN },
        }
      );
      const res = result.data;
      setBannerData(res.data[0].new_data.image["desktop"]);
      setSuppliersData(res.data[1].new_data);
      //   console.log("DATA CAME: ", res.data[1].new_data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const getCategoriesData = async () => {
    try {
      const result = await axios.get(
        "https://api.ebazaar.mn/api/product/categories",
        {
          params: {
            id: "27125,27126,27143,27129,27131,27137,27130,27140,27136,27134",
          },
        }
      );
      //   console.log("CATEGORIES: ", result.data.data);
      setCategoriesData(result.data.data);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const getProductsData = async () => {
    try {
      const productId =
        "[233167,233170,546775,449822,449810,449811,449817,564808,564810,449820,564809,564806,564807,449806,449807,449808,449815,449813]";
      const result = await axios.get(
        `https://api2.ebazaar.mn/api/products/get1?ids=${productId}`,
        {
          headers: { ebazaar_token: process.env.REACT_APP_PRODUCT_TOKEN },
        }
      );
      //   console.log("PRODUCT CHECK: ", result.data.data);
      setProductsData(result.data.data);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  useEffect(() => {
    getPageData();
    getCategoriesData();
    getProductsData();
  }, []);

  return { bannerData, categoriesData, suppliersData, productsData };
};

export default useData;
