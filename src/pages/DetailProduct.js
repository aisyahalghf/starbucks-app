import { Button } from "@chakra-ui/react";
import React from "react";
import NavbarMenu from "../Component/NavbarMenu";
import SizeCup from "../Component/SizeCup";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const DetailProduct = () => {
  const { Id } = useParams();
  const [data, setData] = useState({});
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [totalOrder, SetTotalOrder] = useState("");

  const getDataByid = async () => {
    try {
      const res = await axios.get(`http://localhost:2000/products/${Id}`);
      setData(res.data);
      const TotalOrder = await axios.get("http://localhost:2000/carts")
      SetTotalOrder(TotalOrder.data.length)
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataByid();
  }, [Id]);

  const sizeOptions = () => {
    return data?.size?.map((product, index) => {
      //   console.log(product);
      return (
        <div onClick={() => handleClick(index)} key={index.toString()}>
          <SizeCup option={product.option} cup={product.cup} />
        </div>
      );
    });
  };

  const handleClick = async (index) => {
    try {
      const res = await axios.get(`http://localhost:2000/products/${Id}`);
      setCalories(res.data.size[index].calories);
      setPrice(res.data.size[index].price);
      setSize(res.data.size[index].price);
      console.log(size)
      console.log(res.data)
    } catch (error) {
      console.log(error);
    }
  };
  const handleOrder = async () => {
    // Id Product
    // Index Size
    // Index Topping
    // Quantity
    // UserId

    let dataToSend = {
      productId: parseInt(Id),
      indexSize: size,
      quantity: 1,
      userId: parseInt(localStorage.getItem("id")),
    };

    let checkProduct = await axios.get(
      `http://localhost:2000/carts?productId=${parseInt(Id)}`
    );
    
    if (checkProduct.data.length > 0) {
      // update qty
      await axios.patch(
        `http://localhost:2000/carts/${checkProduct.data[0].id}`,
        { quantity: checkProduct.data[0].quantity + 1 }
      );
      toast("produk sudah di ganti");
    } else {
      // post to cart
      await axios.post("http://localhost:2000/carts", dataToSend);
    
     
      toast("add sukses");
    }

    const TotalOrder = await axios.get("http://localhost:2000/carts")
    SetTotalOrder(TotalOrder.data.length)
  };


  useEffect(() => {
    handleClick();
   
  }, []);

  return (
    <div>
      <NavbarMenu link1="/menu" link2="#" text1="Menu" text2="wwk" />
      <div className=" bg-[#1B322D] ">
        <div className=" flex  items-center  justify-around w-[80%]  ">
          <div>
            <img className="w-[300px]" src={data.image} />
          </div>
          <div>
            <div className=" text-white text-[30px] font-bold ">
              {data.name}
            </div>
            <div className=" text-slate-300 text-[25px] mt-[10px]">
              {calories} Calories
            </div>
            <div className=" text-slate-300 text-[25px] mt-[10px]">
              Rp. {price.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] mt-10 flex justify-around">
        <div>
          <div className="text-[25px] font-semibold w-[300px] mb-3 ">
            Size options
          </div>
          <hr className="border-b-2 border-[#CDE6DE] "></hr>
          <div className="flex items-center justify-center mt-10">
            {sizeOptions()}
          </div>
        </div>
        <div>
          <div className="text-[25px] font-semibold w-[300px] mb-3 ">
            Customizations
          </div>
          <hr className="border-b-2 border-[#CDE6DE] mb-10 "></hr>


          <div>
            <h1
              className="text-2xl font-bold pb-2"
              style={{ borderBottom: "3px solid silver" }}
            >
              Topping
            </h1>
            <select className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {data?.topping?.map((value, index) => {
                return <option key={index}>{value}</option>;
              })}
            </select>
          </div>

          <div>
            <h1
              className="text-2xl font-bold pb-2"
              style={{ borderBottom: "3px solid silver" }}
            >
              Sugar
            </h1>
            <select className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {data?.sugar?.map((value, index) => {
                return <option key={index}>{value}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
      <div className= "ml-[120px] center text-grey font-extrabold "  >{totalOrder}</div>
      <Button onClick={handleOrder} colorScheme="facebook">
        Add To Order
      </Button>
      <Toaster />
    </div>
  );
};
export default DetailProduct;
