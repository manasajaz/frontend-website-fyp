import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/index.jsx";
import Contact from "../pages/contact.jsx";
import Gallery from "../pages/gallery.jsx";
import Footer from "../components/footer.jsx";
import Navbar from "../components/navbar.jsx";
import Login from "../components/Auth/login.js";
import AppointmentForm from '../components/AppointmentForm';
import Register from "../components/Auth/register.js";
import ProfileData from "../components/Profile/ProfileData.js";
import { AuthProvider } from "../components/Auth/AuthContext/AuthContext.js";
import ProtectedRoute from "../components/Auth/AuthContext/ProtectedRoute.js";


export default function AppRouter() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={<ProfileData />}
                  redirectPath="/profile"
                />
                
              }
            />
             <Route
                    path="/appointment-form"
                    element={
                        <ProtectedRoute>
                            <AppointmentForm />
                        </ProtectedRoute>
                    }
                />
                
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}
