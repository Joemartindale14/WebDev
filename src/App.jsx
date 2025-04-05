import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Classes from "./pages/Classes/Classes";
import Facilities from "./pages/Facilities/Facilities";
import Memberships from "./pages/Memberships/Memberships";
import Merchandise from "./pages/Merchandise/Merchandise";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Account from "./pages/Account/Account";
import Admin from "./pages/Admin/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
import BurgerIcon from "./components/BurgerIcon/BurgerIcon";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import { CartProvider } from "./context/CartContext";
import { ClassBookingProvider } from "./context/ClassBookingContext";
import Cart from "./pages/Cart/Cart"; 
import OrderConfirmation from "./pages/OrderConfirmation/OrderConfirmation";

const App = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <CartProvider>
      <ClassBookingProvider>
          <Router>
              <div className={`container ${theme}`}>
                <Navbar theme={theme} setTheme={setTheme} />
                <BurgerIcon toggleMenu={toggleMenu} />
                <DropdownMenu isOpen={isMenuOpen} />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Classes" element={<Classes />} />
                  <Route path="/Facilities" element={<Facilities />} />
                  <Route path="/Memberships" element={<Memberships />} />
                  <Route path="/Merchandise" element={<Merchandise />} />
                  <Route path="/Contact" element={<Contact />} />
                  <Route path="/SignIn" element={<SignIn />} />
                  <Route path="/SignUp" element={<SignUp />} />
                  <Route path="/Account" element={<ProtectedRoute element={<Account />} />} />
                  <Route path="/Admin" element={<ProtectedRoute element={<Admin />} />} />
                  <Route path="/Cart" element={<Cart />} />
                  <Route path="/OrderConfirmation" element={<OrderConfirmation />} />
                </Routes>
                <Footer />
                <ToastContainer theme="dark" position="top-center" />
              </div>
          </Router>
        </ClassBookingProvider>
    </CartProvider>
  );
};

export default App;