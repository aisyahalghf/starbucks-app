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
      // mengecek user sudah pernah login / belum, dilihat dari local straongenya
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
        </Routes>
      </div>
    </>
  );
};
export default App;

// // function App() {
// //   // const [data, setData] = useState({});
// //   // console.log(data.title);
// //   // useEffect(() => {
// //   //   const datas = fetch("https://jsonplaceholder.typicode.com/todos/1")
// //   //     .then((response) => response.json())
// //   //     .then((json) => setData(json));
// //   //   // setData(datas);
// //   // }, []);
// //   // 2
// //   // const [data, setData] = useState([]);
// //   // console.log(data[0].name);
// //   // useEffect(() => {
// //   //   axios
// //   //     .get("https://jsonplaceholder.typicode.com/users")
// //   //     .then((res) => {
// //   //       alert("berhasil");
// //   //       setData(res.data);
// //   //     })
// //   //     .catch((err) => {
// //   //       alert("gagal");
// //   //       console.log(err);
// //   //     });
// //   // }, []);

// //   //3

// // }

// // export default App;

// // // formik

// // const LoginSchema = Yup.object().shape({
// //   email: Yup.string()
// //     .email("Invalid email address format")
// //     .required("Email is required"),
// //   password: Yup.string()
// //     .min(3, "Password must be 3 characters at minimum")
// //     .required("password is required"),
// // });

// // class App extends React.Component {
// //   render() {
// //     return (
// //       <>
// //         <div>
// //           <Formik
// //             initialValues={{ email: "", password: "" }}
// //             validationSchema={LoginSchema}
// //             onSubmit={(value) => {
// //               console.log(value);
// //             }}
// //           >
// //             {(props) => {
// //               console.log(props);
// //               return <Form></Form>;
// //             }}
// //           </Formik>
// //         </div>
// //         <Form>
// //           <div>
// //             <label htmlFor="email">Email</label>
// //             <Field
// //               type="text"
// //               name="email"
// //               placeholder="Enter email"
// //               autoComplete="off"
// //             />
// //             <ErrorMessage
// //               Component="div"
// //               name="email"
// //               style={{ color: "red" }}
// //             />
// //           </div>
// //           <div>
// //             <label htmlFor="password">Password</label>
// //             <Field
// //               type="password"
// //               name="password"
// //               placeholder="Enter password"
// //             />
// //             <ErrorMessage
// //               component="div"
// //               name="password"
// //               style={{ color: "red" }}
// //             />
// //           </div>
// //           <button type="submit">Login</button>
// //         </Form>
// //       </>
// //     );
// //   }
// // }

// // export default App;

// const App = () => {
//   // get data
//   // axios
//   //   .get("http://localhost:2000/users")
//   //   .then((res) => {
//   //     alert("berhasil");
//   //     console.log(res.data);
//   //   })
//   //   .catch((err) => {
//   //     alert("gagal");
//   //     console.log(err);
//   //   });
//   // nambah data
//   axios
//     .post("http://localhost:2000/users", {
//       first_name: "yuli",
//       last_name: "lly",
//       email: "lli34@gmail.com",
//     })
//     .then((res) => {
//       alert("berhasil di tambahkan");
//       console.log(res.data);
//     })
//     .catch((err) => {
//       alert("gagal");
//       console.log(err);
//     });
//   //

//   // modifikasi data

//   // axios
//   //   .put("http://localhost:2000/users/6/", {
//   //     first_name: "aisyah",
//   //     last_name: "alghifari",
//   //     email: "aisyah@gmail.com",
//   //   })
//   //   .then((res) => {
//   //     alert("berhasil mengganti data");
//   //     console.log(res.data);
//   //   })
//   //   .catch((err) => {
//   //     alert("gagal");
//   //     console.log(err);
//   //   });

//   // axios
//   //   .patch("http://localhost:2000/users/7/", {
//   //     email: "aisyah@gmail.com",
//   //   })
//   //   .then((res) => {
//   //     alert("berhasil mengganti data");
//   //     console.log(res.data);
//   //   })
//   //   .catch((err) => {
//   //     alert("gagal");
//   //     console.log(err);
//   //   });

//   // axios
//   //   .delete("http://localhost:2000/users/7/", {})
//   //   .then((res) => {
//   //     alert("berhasil mendeletedata");
//   //     console.log(res.data);
//   //   })
//   //   .catch((err) => {
//   //     alert("gagal");
//   //     console.log(err);
//   //   });
// };

// export default App;
