import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Restaurent from "./components/Restaurent";
import Home from "./components/Home";
import RestaurantMenu from "./components/RestaurantMenu";
import SecondaryHome from "./components/SecondaryHome";
import Checkout from "./components/Checkout";
import {store} from "./stored/stores";
import { Provider } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<SecondaryHome></SecondaryHome>}>
        <Route path="/restaurant" element={<Restaurent />} />
        <Route path="/city/delhi/:id" element={<RestaurantMenu />}></Route>
        <Route path="/Checkout" element={<Checkout/>}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
