import './App.css'
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import Signup from './pages/Signup/Signup';
import ProductPage from './pages/Product/ProductPage';
import PricingPage from './pages/Pricing/PricingPage';
import SupportPage from './pages/Support/SupportPage';
import Navbar from "./Navbar";
import Footer from "./Footer";

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './pages/Login/Login';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/product" element={<ProductPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/support" element={<SupportPage/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </>
  )
}

export default App
