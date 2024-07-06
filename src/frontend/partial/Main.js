import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";

import Register from "../pages/User/Register";
import Login from "../pages/User/Login";

import ProductDetail from "../pages/Product/ProductDetail";
import ProductList from "../pages/Product/ProductList";
import MyProfile from "../pages/MyProfile/MyProfile";
import MyOrder from "../pages/MyProfile/MyOrder";
import MyAddress from "../pages/MyProfile/MyAddress";
import MySetting from "../pages/MyProfile/MySetting";
import MyWishList from "../pages/MyProfile/MyWishList";
import Cart from "../pages/Cart/Cart";


const Main = () => (
  <main>
    <Routes>
      <Route path="/?login=1" element={<Home />}  />
      <Route path="/" element={<Home  />} />      
      <Route path="/register" element={<Register  />} />
      <Route path="/login" element={<Login  />} />
      <Route path="/product/8" element={<ProductDetail  />} />
      <Route path="/products" element={<ProductList  />} />
      <Route path="/my-profile" element={<MyProfile  />} />
      <Route path="/my-order" element={<MyOrder  />} />
      <Route path="/my-address" element={<MyAddress  />} />
      <Route path="/my-setting" element={<MySetting  />} />
      <Route path="/my-wish-list" element={<MyWishList  />} />
      <Route path="/cart" element={<Cart  />} />      
    </Routes>
  </main>
);
export default Main;
