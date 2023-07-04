import React, { useState } from "react";
import api from "../../../helper/axios/userAxios";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

function UserLogin() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/login", formValues).then((response) => {
      if (response.data.message == "Success") {
        let date = new Date();
        date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
        const expires = "expires=" + date.toUTCString();
        document.cookie =
          "token=Bearer " + response.data.token + ";" + expires + "; path=/";
        navigate("/");
      } else {
        alert(response.data.message);
      }
    });
  };
  return (
    <div className="flex justify-center items-center h-screen bg-teal-200 ">
      <div className="flex flex-col justify-center text-center bg-teal-400 rounded-2xl sm:w-2/5 shadow-lg py-5  px-16 ">
        <h2 className="text-3xl font-serif ">Login</h2>

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
          className=" rounded-lg  p-2 mt-8 hover:bg-slate-100"
        />
        <div className="flex flex-row relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
            className=" rounded-lg  p-2 mt-8 w-full hover:bg-slate-100"
          />
          <AiOutlineEye
            className="absolute top-1/2 right-3 translate-y-2 w-11 text-slate-500 cursor-pointer"
            onMouseEnter={()=> setShowPassword(!showPassword)}
            onMouseLeave={()=> setShowPassword(!showPassword)}
          />
        </div>

        <button
          className="rounded-lg bg-cyan-900 hover:bg-cyan-950 py-2 mt-8 text-white text-lg "
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default UserLogin;
