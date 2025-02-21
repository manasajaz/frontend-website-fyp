import React, { useState } from "react";
import loginImg from "../../assets/AuthImages/blog.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    showPassword: false,
    profilePicture: null,
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      toast.error("File size should not exceed 5MB.");
      return;
    }
    setFormData({ ...formData, profilePicture: file });
  };

  const togglePasswordVisibility = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const validateForm = () => {
    const { name, email, password, role } = formData;
    if (!name || !email || !password || !role) {
      toast.error("Please fill all required fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("password", formData.password);
      formDataToSubmit.append("role", formData.role);
      if (formData.profilePicture) {
        formDataToSubmit.append("profilePicture", formData.profilePicture);
      }

      const response = await axios.post(
        "http://localhost:4600/api/auth/register",
        formDataToSubmit,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Registration Successful!");
      setTimeout(() => {
        // navigate(formData.role === "doctor" ? "/doctor-dashboard" : "/patient-dashboard");
        navigate('/login')
      }, 2000);
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Registration failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-10 gap-4 p-5 bg-indigo-50 min-h-screen">
      {/* Left-side image */}
      <div className="col-span-4">
        <img className="w-full object-cover h-full" src={loginImg} alt="Register" />
      </div>

      {/* Right-side form */}
      <div className="col-span-6 bg-white p-5 rounded shadow flex flex-col justify-start">
        <h2 className="text-4xl mb-8 mt-12 font-semibold">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full border rounded-md p-2 focus:border-indigo-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full border rounded-md p-2 focus:border-indigo-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <div className="relative">
              <input
                type={formData.showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full border rounded-md p-2 focus:border-indigo-600 focus:outline-none"
              />
              <span className="absolute right-3 top-3 cursor-pointer" onClick={togglePasswordVisibility}>
                {formData.showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="block w-full border rounded-md p-2 focus:border-indigo-600 focus:outline-none"
            >
              <option value="">Select Role</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Profile Picture</label>
            <input
              type="file"
              name="profilePicture"
              onChange={handleFileChange}
              className="block w-full border rounded-md p-2 focus:border-indigo-600 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
          <div className="mt-4">
            <span>Already have an account?</span>
            <Link to="/login" className="ml-2 text-indigo-500 underline">
              Sign In
            </Link>
          </div>
        </form>
        <ToastContainer autoClose={2000} theme="light" />
      </div>
    </div>
  );
};

export default Register;
