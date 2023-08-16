/* eslint-disable no-throw-literal */

import React from "react";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);

  const orderCart = async () => {
    try {
      const res = await axios.get(`http://localhost:2000/carts`);
      alert("sukses");
      const cartData = res.data;
      const newPromise = [];
      cartData.forEach((v) => {
        newPromise.push(
          axios.get(` http://localhost:2000/products?id=${v.productId}`)
        );
      });
      const data = await Promise.all(newPromise);

      setCart(cartData);
      setDataProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:2000/products");
      if (cart.length > 1) {
        const a = [];
        for (let i = 0; i < cart.length; i++) {
          for (let j = 0; j < res.data.length; j++) {
            if (
              res.data[j].id === cart[i].productId &&
              res.data[j].options === cart[i].size
            ) {
              a.push(res.data[j]);
            }
          }
        }

        setProducts(a);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(products);

  useEffect(() => {
    getProducts();
  }, [cart]);

  useEffect(() => {
    orderCart();
  }, []);

  return (
    <div className="flex">
      <div className="w-[40%] h-[800px] flex items-center justify-center font-extrabold text-[30px]  bg-white  ">
        <div className="fixed">Cart </div>
      </div>
      <div className="w-[50%] mt-[30px] ">
        {products.map((val, idx) => {
          return (
            <div
              className="flex justify-between  border border-slate-200 p-10 "
              key={idx.toString()}
            >
              <div className="flex flex-col gap-4">
                <div className=" text-2xl font-mono font-extrabold mt-5 ">
                  {val.name}
                </div>
                <div className=" font-mono font-bold ">{val.price}</div>
              </div>
              <div>
                <div className="w-[200px]">
                  <img src={val.image} alt="image" />
                </div>
                <div className="flex justify-between mt-5 items-center ">
                  <Button>-</Button>
                  <div>{val.quantity}</div>
                  <Button>+</Button>
                </div>
              </div>
            </div>
          );
        })}

        <div className="mt-20 border border-slate-200 p-10 ">
          <div className="flex justify-between font-extrabold  text-xl mb-3 ">
            <h1>Payment Summary</h1>
          </div>
          <div className="flex justify-between mb-2  ">
            <h2>Price</h2>
            <h1>92000</h1>
          </div>

          <div className="flex justify-between mb-2  ">
            <h2>Delivery fee</h2>
            <h1>12000</h1>
          </div>

          <div className="flex justify-between mb-2  ">
            <h2>Service and Other fees</h2>
            <h1>2000</h1>
          </div>

          <hr></hr>
          <div className="flex justify-between ">
            <h2 className=" font-bold ">Total Payment</h2>
            <h1>2000</h1>
          </div>
          <hr className="mb-10"></hr>
          <Button w="100%">Order</Button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
