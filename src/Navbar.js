import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (

    <div>
    <div className="nav-top d-flex justify-content-between p-2">
      <div className="site-name offset-lg-1">Lowkey Myntra</div>
      <div className="menu d-flex">
          <a to="/about" className="px-3">About us</a>
          <a to="/shop" className="px-3">Shop-center</a>
          <a to="/cart">Cart</a>
        </div>
      <div className="px-3">
        <img src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964__340.png" className="image-size px-3" />
        Login
      </div>
    </div>
    </div>

  );
}
