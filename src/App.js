import "./App.css";
// import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Sign from "./pages/Sign";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DetailProduct from "./pages/DetailProduct";
import Cart from "./pages/Cart";

const App = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const onLogin = async (inputEmail, inputPassword) => {
    try {
      let respons = await axios.get(
        `http://localhost:2000/users?email=${inputEmail}&&password=${inputPassword}`
      );
      console.log(respons.data);
      if (respons.data.length === 0)
        throw { message: "data yang anda masukan salah" };
      setUserName(respons.data[0].first_name);
      // kenapa harus id karena jika username pasti akan diedit oleh usernya
      localStorage.setItem("id", respons.data[0].id);
      navigate("/");
    } catch (error) {
      toast(error.message);
    }
  };

  let keepLogin = async () => {
    try {
      let getId = parseInt(localStorage.getItem("id"));
      let response = await axios.get(`http://localhost:2000/users/${getId}`);
      setUserName(response.data.first_name);
    } catch (error) {}
  };

  useEffect(() => {
    keepLogin();
  }, []);

  return (
    <>
      <div>
        <Navbar userName={{ userName }} />
        <Routes>
          <Route
            path="/register"
            element={userName ? <navigate to="/" /> : <Register />}
          />
          <Route
            path="/sign"
            element={
              userName ? <navigate to="/" /> : <Sign myFunc={{ onLogin }} />
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:Id" element={<DetailProduct />} />
          <Route path="cart" element={<Cart />}>
            cart
          </Route>
        </Routes>
      </div>
    </>
  );
};
export default App;
