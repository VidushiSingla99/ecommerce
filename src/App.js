import "./App.css";
import Navbar from "./Navbar";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
import Item from "./Item";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import React from "react";

function App() {

  return (
    <div className="App">


      <CartProvider>
      <Navbar />

        <div className="row">
        <Item />
        <Cart />
        </div>

        </CartProvider>

    </div>
  );
}

export default App;
