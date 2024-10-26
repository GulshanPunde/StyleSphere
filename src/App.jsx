import React from "react";
import NavBar from "./components/nav/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Cart from "./pages/Cart";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCartNumber } from "./features/cart/cartSlice";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ContactPage from "./pages/ContactPage";
import Setting from "./components/settingsPages/Setting";
import Help from "./pages/Help";
import Registration from "./pages/Registration";

function App() {
  const dispatch = useDispatch();
  const title = "StyleSphere";
  const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(setCartNumber());
  }, [cartItems]);
  return (
    <div className="wrapper bg-dark text-white">
      <NavBar title={title} />
      <div className="container mt-5 py-5 px-3 px-md-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/contact_page" element={<ContactPage />} />
          <Route path="/help" element={<Help />} />
          <Route path="/settings" element={<Setting/>}/>
        </Routes>
      </div>
      <Footer title={title} />
    </div>
  );
}

export default App;
