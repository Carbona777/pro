import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import About from "./component/About";
import ProductDetails from "./component/ProductDetails";
import ProductList from "./component/ProductList";
import SideBar from "./component/SideBar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import AddProduct from "./Pages/AddProduct";
import Edit from "./Pages/Edit";
import Greeting from "./component/Greeting";
import logo from './logo.svg'; // Import your logo file
import "./App.css";
import Cart from "./Pages/AppCart/Cart";
import NavBar from "./Pages/AppCart/NavBar";
import Product from "./Pages/AppCart/Product";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Footer/>

      {/* <NavBar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="cart" element={<Cart />} />
      </Routes> */}
    </div>
  );
}

export default App;
