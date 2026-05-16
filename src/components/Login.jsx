import React, { useState } from "react";
import Api from "../Api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    password: "",
  });

  const nav=useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await Api.post("/login", formData);
      console.log(res.data.message);
      console.log(res.data.user)
      localStorage.setItem('user',JSON.stringify(res.data.user))

      

        if(res.data.user.userType==='admin'){
          nav('/admin')
        }                              //This method is used for navigating to corresponding after logging in
        else{
          nav('/common')
        }

    } catch (err) {
      console.log(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100 flex items-center justify-center px-4">
      <form
        onSubmit={submit}
        className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 space-y-5"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back
          </h1>
          <p className="text-gray-500 mt-2">
            Login to continue
          </p>
        </div>

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          name="userName"
          type="text"
          placeholder="Username"
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <span className="text-green-600 cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;