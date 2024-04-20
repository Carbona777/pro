import React from "react";
import { Link } from "react-router-dom";

function SideBar(){
  return (
<>

    <ul  className="list">
        <li>
          <Link to={'/products'}>Get All Products</Link>
        </li>
        <li>
          <Link to="/about">Get All Categories</Link>
        </li>
        {/* Add more sidebar items as needed */}
      </ul>
      </>  
  );
};

export default SideBar;
