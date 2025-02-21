import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import { Slide, toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

//import Components
import Register from './register'

//import Assets
import loginImg from "../../assets/AuthImages/blog.jpg";


const Login = ({ history }) => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,

  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
    console.log(name, value)
  }

  const EyeButtonVissibility = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword })
  }
  const handlelogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4600/api/auth/login', formData)
      localStorage.setItem("token", response.data.token);
      navigate("/")

    } catch (error) {
      if (error.response.status === 400 && error.response.data.error === 'Invalid credentials') {
        toast.error('Invalid email or password');
      } else if (error.response.status === 500 && error.response.data.error === 'Server error') {
        toast.error('Server error');
      } else {
        toast.error('An unexpected error occurred');
      }

    }

  }




  return (

    <div className='grid grid-cols-10 gap-5 p-5 bg-red-50 min-h-screen'>
      <div className='col-span-4 row-span-6 '>
        <img className='w-full object-cover object-left hover:object-center transition-all duration-500 h-full w-full' src={loginImg}></img>
      </div>
      <div className=' content-around col-span-6 row-span-6 bg-white p-5 rounded- shadow min-h-screen'>
        <h2 className='flex justify-start text-4xl mb-8 pb-4'>Sign In</h2>
        <form onSubmit={handlelogin} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Email</label>
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Password</label>
            <div className='relative'>
              <input
                type={formData.showPassword ? "text" : "password"}
                placeholder='Enter Password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3'
              />
              <span className='absolute inset-y-0 right-0 pr-3 flex items-center'>

                {formData.showPassword ? (
                  <FaRegEye className='text-gray-600 cursor-pointer' onClick={EyeButtonVissibility} />
                ) : (
                  <FaRegEyeSlash className='text-gray-600 cursor-pointer' onClick={EyeButtonVissibility} />
                )
                }

              </span>
            </div>
          </div>
          <button type="submit" className='block w-2/5 bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700'>
            Login
          </button>
          <h1 className='inline-block'>Dont have an Account?</h1>
          <Link to='/register' className='ml-2 text-md text-indigo-500 underline'>Sign Up</Link>

        </form>
      </div>
      <ToastContainer position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>

  )
}

export default Login