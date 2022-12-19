import { Button } from "@chakra-ui/react";
import { useRef, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const [messege, setMessege] = useState("");

  let firstName = useRef();
  let lastName = useRef();
  let email = useRef();
  let password = useRef();

  const handleClickDelete = async () => {
    const getData = await axios.get("http://localhost:2000/users");

    await axios
      .delete(`http://localhost:2000/users/${getData.data.length}`)
      .then((res) => {
        alert("akun anda telah di hapus");
        console.log(getData.data);
      })
      .catch(() => {
        alert("email anda tidak terdaftar");
      });
  };

  const handleClick = async () => {
    try {
      // mendapatkan data dari user
      let inputFirstName = firstName.current.value;
      let inputLastName = lastName.current.value;
      let inputEmail = email.current.value;
      let inputPassword = password.current.value;
      let regxEmail = /\S+@\S+\.\S+/;
      let regxPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

      const checkName = await axios.get(
        `http://localhost:2000/users?first_name=${inputFirstName} `
      );
      const checkEmail = await axios.get(
        `http://localhost:2000/users?email=${inputEmail} `
      );

      // validasi data
      if (!inputFirstName || !inputLastName || !inputEmail || !inputPassword) {
        throw "*Incomplete Data";
      } else if (checkName.data.length > 0 || checkEmail.data.length > 0) {
        throw "*you have already registered, please Login";
      } else if (inputFirstName.length <= 3 || inputLastName.length <= 2) {
        throw "*first name and last name must have at least 3 character ";
      } else if (!regxEmail.test(inputEmail)) {
        throw "*The email you entered is incorrect ";
      } else if (!regxPassword.test(inputPassword)) {
        throw "*password must be contain uppercase, lowercase, number,special character and min 8 character ";
      } else {
        await axios.post("http://localhost:2000/users", {
          first_name: inputFirstName,
          last_name: inputLastName,
          email: inputEmail,
          password: inputPassword,
        });
        toast("Successfull Registration");
        firstName.current.value = "";
        lastName.current.value = "";
        email.current.value = "";
        password.current.value = "";
        setMessege("");
      }
    } catch (error) {
      setMessege(error);
    }
  };

  return (
    <div className="  w-1/4  m-auto ">
      <h1 className="text-3xl font-bold text-center m-20  ">
        Create an account
      </h1>
      <h4 className="text-center indent-2 mb-5">STARBUCK REWARD</h4>
      <p className="text-center text-sm mb-3 ">
        Join Starbuck Reward to earn Start for free food and drink, any wat you
        pay. Get acces to mobile ordering, a birthday Reward, and
        <span>
          <a href="#">more</a>
        </span>
      </p>
      <div>
        <div className=" flex-col border border-slate-300 shadow-2xl rounded-xl text-center h-130 pb-10 pt-10">
          <h4 className="p-3">*indicates required field </h4>
          <h2 className="font-bold m-2">Personal Information</h2>
          <div>
            <input
              ref={firstName}
              className="border border-slate-600 rounded-xl p-2 text-center m-2"
              placeholder="*First name"
              type="text"
            />
          </div>
          <div>
            <input
              ref={lastName}
              className="border border-slate-600 rounded-xl p-2 text-center m-2"
              placeholder="*Last name"
              type="text"
            />
          </div>

          <div className="font-bold m-2">Account Security</div>
          <div>
            <input
              ref={email}
              className="border border-slate-600 rounded-xl p-2 text-center m-2"
              placeholder="*Email"
              type="text"
            />
          </div>
          <div>
            <input
              ref={password}
              className="border border-slate-600 rounded-xl p-2 text-center m-2"
              placeholder="Password"
              type="Password"
            />
          </div>
          <div className=" text-red-700 text-xs ">{messege}</div>
          <Button
            onClick={handleClick}
            className="pl-2 pr-2 p-1 mt-2 border border-slate-500 rounded-xl m-0-auto"
          >
            register
          </Button>
          <Button
            onClick={handleClickDelete}
            className="pl-2 pr-2 p-1 mt-2 ml-2 border border-slate-500 rounded-xl m-0-auto"
          >
            hapus data
          </Button>
          <Toaster />
        </div>
      </div>
    </div>
  );
}
