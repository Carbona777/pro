import React, { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import About from "./component/About";
import ProductDetails from "./component/ProductDetails";
import ProductList from "./component/ProductList";
import SideBar from "./component/SideBar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import AddProduct from "./Pages/AddProduct";
import "./App.css";
import styles from "./index.css";
import Greeting from "./component/Greeting";
import Edit from "./Pages/Edit";
export const ProductContext = createContext();

function Ap() {
  return (
    <div className="App">
      {/* Navbar component */}
      <Navbar />
      <div className="row">
        {/* Sidebar component */}
        <div className="col-2 sidebar">
          <SideBar />
        </div>
        <div className="col-10">
          {/* Routes for main content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<AddProduct />} /> {/* Corrected route path */}
            <Route path="/products/:productID" element={<Greeting />} />
            <Route path="about" element={<About />} />
            <Route path="/products/edit/:productID" element={<Edit/>} />
          </Routes>
        </div>
      </div>
      {/* Routes for commented-out sections */}
      {/* <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path=":productId" element={<ProductDetails />} />
      </Routes> */}
    </div> )
  

    <div className="App">
      {/* Navbar component */}
      <Navbar />
      <div className="row">
        {/* Sidebar component */}
        <div className="col-2 sidebar">
          <SideBar />
        </div>
        <div className="col-10">
          {/* Routes for main content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<AddProduct />} /> {/* Corrected route path */}
            <Route path="/products/:productID" element={<Greeting />} />
            <Route path="about" element={<About />} />
            <Route path="/products/edit/:productID" element={<Edit/>} />
          </Routes>
        </div>
      </div>
      {/* Routes for commented-out sections */}
      {/* <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path=":productId" element={<ProductDetails />} />
      </Routes> */}
    </div> )
  

    <div className="App">
      {/* Navbar component */}
      <Navbar />
      <div className="row">
        {/* Sidebar component */}
        <div className="col-2 sidebar">
          <SideBar />
        </div>
        <div className="col-10">
          {/* Routes for main content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<AddProduct />} /> {/* Corrected route path */}
            <Route path="/products/:productID" element={<Greeting />} />
            <Route path="about" element={<About />} />
            <Route path="/products/edit/:productID" element={<Edit/>} />
          </Routes>
        </div>
      </div>
      {/* Routes for commented-out sections */}
      {/* <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path=":productId" element={<ProductDetails />} />
      </Routes> */}
    </div> )};
  
