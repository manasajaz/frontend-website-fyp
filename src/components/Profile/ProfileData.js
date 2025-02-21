import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUserMd, FaUser, FaTrashAlt } from "react-icons/fa"; // Icons for better UI

const ProfileData = () => {
  const [activeTab, setActiveTab] = useState("doctors");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const endpoint =
          activeTab === "doctors"
            ? "http://localhost:4600/api/auth/doctor"
            : "http://localhost:4600/api/auth/patient";
        const response = await axios.get(endpoint);
        console.log("API Response:", response.data); 
        setData(response.data);
      } catch (error) {
        console.error(`Error fetching ${activeTab}:`, error);
        setError(`Failed to load ${activeTab}.`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

  const handleDelete = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You are not logged in.");
      navigate("/login");
      return;
    }

    try {
      await axios.delete("http://localhost:4600/api/auth/delete", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Account deleted successfully");
      localStorage.removeItem("token");
      navigate("/register");
    } catch (error) {
      console.error("Deletion failed", error);
      alert("Failed to delete account");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Modern Sidebar */}
      <div className="w-1/6 bg-gray-900 text-gray-200 p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-8">Profile</h2>
        <ul className="space-y-6">
          <li
            className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition ${
              activeTab === "doctors" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("doctors")}
          >
            <FaUserMd className="text-xl" />
            <span className="text-lg">Doctors</span>
          </li>
          <li
            className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition ${
              activeTab === "patients" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("patients")}
          >
            <FaUser className="text-xl" />
            <span className="text-lg">Patients</span>
          </li>
          <li
            className="flex items-center gap-4 p-3 rounded-lg cursor-pointer hover:bg-red-600 bg-red-500 transition text-white"
            onClick={handleDelete}
          >
            <FaTrashAlt className="text-xl" />
            <span className="text-lg">Delete Account</span>
          </li>
        </ul>
      </div>

      {/* Content Section */}
      <div className="w-3/4 p-8">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && (
          <div>
            <h1 className="text-3xl font-bold mb-6">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} List
            </h1>
            <ul className="bg-white p-6 rounded shadow-md">
              {data.length > 0 ? (
                data.map((item) => (
                  <li key={item._id} className="mb-4 border-b pb-4">
                    {/* Display the profile picture */}
                    <img
                      src={item.profilePicture} // Using the profile picture URL
                      alt={`${item.name}'s profile`}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p>Email: {item.email}</p>
                    <p>Role: {item.role}</p>
                  </li>
                ))
              ) : (
                <p>No {activeTab} found.</p>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileData;
