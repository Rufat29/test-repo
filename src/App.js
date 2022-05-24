import Navbar from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import HomePage from "./pages/Homepage";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ForgetPassword from "./components/pages/ForgetPassword";
import About from "./pages/About";
import Condition from "./components/pages/Conditions";
import ScrollToTop from "./components/pages/ScrollTop";
import Profile from "./pages/Profile";
import Order from "./components/pages/Orders";
import NotFound from "./pages/NotFound";
import ProductList from "./pages/ProductList";
import CategoryList from "./pages/CategoryList";
import ProductDetails from "./pages/ProductDetails";
import Basket from "./pages/Basket/basket";

import { Redirect, Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Outlet />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/haqqimizda" element={<About />} />
        <Route path="/kateqoriyalar" element={<CategoryList />} />
        <Route path="/mehsullar" element={<ProductList />} />
        {/* <Route path="/mehsullar/:id" element={<ProductList />} /> */}
        <Route path="/mehsullar/:id" element={<ProductDetails />} />
        <Route path="/sebet" element={<Basket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/register" element={<Register />} />
        <Route path="/login/forgetpassword" element={<ForgetPassword />} />
        <Route path="/login/condition" element={<Condition />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop></ScrollToTop>
      <Footer></Footer>
    </div>
  );
}

export default App;
