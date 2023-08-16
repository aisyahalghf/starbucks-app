import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../Component/ProductCard";
import NavbarMenu from "../Component/NavbarMenu";
import { Link } from "react-router-dom";

const Menu = (props) => {
  const [datas, setDatas] = useState([]);
  const [category, setCategory] = useState([]);
  const [messege, setMessege] = useState("");

  const getData = async () => {
    try {
      let responseProduct = await axios.get("http://localhost:4000/products");
      let responseCategory = await axios.get(" http://localhost:2000/category");
      setDatas(responseProduct?.data?.data);
      console.log(responseProduct?.data?.data);
      setCategory(responseCategory.data);
    } catch (error) {
      // alert(error);
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let mapCategory = () => {
    return category.map((val, idx) => {
      return (
        <h1
          key={idx.toString()}
          onClick={() => handleFilter(idx)}
          className="pb-[20px] font-semibold text-[20px] "
        >
          {val}
        </h1>
      );
    });
  };

  let mapProducts = () => {
    return datas.map((val, idx) => {
      return (
        <Link key={idx.toString()} to={`/menu/${val.id}`}>
          <div>
            <ProductCard img={val.image} text={val.name} />
          </div>
        </Link>
      );
    });
  };

  let handleFilter = async (idx) => {
    try {
      let filter = await axios.get(
        `http://localhost:2000/products?category=${idx}`
      );
      // let filter = await axios.get(
      //   `http://localhost:4000/products?category=${idx}`
      // );

      if (filter.data.length === 0) {
        alert("Product Tidak Tersedia");
      } else {
        setDatas(filter.data);
        setMessege(category[idx]);
      }
    } catch (error) {}
  };

  return (
    <>
      <NavbarMenu
        link1="#"
        link2="#"
        link3="#"
        link4="#"
        text1="All product"
        text2="Featured"
        text3="Previous Orders"
        text4="Favorite Product"
      />

      <div className="flex gap-[30px] pl-[35px] pr-[35px] mt-[40px] ">
        <div className="w-[20%] flex-col ">
          <div className="pb-[20px] font-semibold text-[20px] ">
            {mapCategory()}
          </div>
        </div>

        <div className="flex-col w-[60%] ">
          <h1 className=" font-extrabold text-[30px] pb-[50px] ">Menu</h1>
          <h1 className="font-extrabold text-[25px] pb-[20px] ">{messege}</h1>
          <hr className="pb-[20px]"></hr>
          <div className=" grid grid-cols-2 gap-5 ">{mapProducts()}</div>
        </div>
      </div>
    </>
  );
};

export default Menu;
