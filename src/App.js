
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import UseContext from './CustomHooks/UseContext'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import JoinUs from './components/JoinUs';
import { createContext, useEffect, useState } from 'react';

import Layout from './components/UI/Dashboard/Layout/Layout'
import Cars from './components/Dashboard/Cars'
import Dashboard from './components/Dashboard/Dashboard'
import Costumers from './components/Dashboard/Costumers'
import Settings from './components/Dashboard/Settings'
import Providers from './components/Dashboard/Providers'
import Admins from './components/Dashboard/Admins'
import RentedCars from './components/Dashboard/RentedCars'
import Products from './components/Products';
import Loader from './components/Loader';
import Login from './components/Login';
import ProductsDetails from './components/ProductsDetails';
import About from '../src/components/About'
import PubishAuction from './components/PublishAuction';
import Page403 from './components/page403';
import axios from 'axios';
import Profile from './components/Profile';
import Cart from './components/Cart';
export const ProductsData = createContext();


function App() {
  const { data } = UseContext();
  const[logged , setlogged]=useState(sessionStorage.getItem("token"))
  // const location = useLocation();
  async function checkToken(token) {
    try {
      const response = await axios.get("http://localhost:5000/checkToken", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  useEffect(() => {
    console.log(window.location.pathname)
    const token = sessionStorage.getItem("token") || false;
    if (token) {
      checkToken(token).then((resultUsers) => {
        setlogged(resultUsers?.role)
        console.log(resultUsers)
        // if (resultUsers) {
        //   updateIsLog(true);
        //   navigate(path);
        // }
      });
    }
  }, []);

  return (
    <BrowserRouter>
    <ProductsData.Provider value={data || []}>
    {!window.location.pathname.includes("admin") ? <Header value={logged}/> : null} 
        <Routes>
          <Route index element={<Home setlogged={setlogged}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/joinUs" element={<JoinUs />} />
          <Route path="/login" element={<Login />} />
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/pubishauction" element={<PubishAuction />} />
          <Route path="/productdetails/:id" element={data ? <ProductsDetails />:<Loader />} />
          <Route path='/auction' element={data ?<Products/>:<Loader />}/>
          <Route path="/admin" element={<Layout />}>
            <Route path="Dashboard" index element={<Dashboard />} />
            <Route path="Cars" element={<Cars />} />
            <Route path="Costumers" element={<Costumers />} />
            <Route path="settings" element={<Settings />} />
            <Route path="Providers" element={<Providers />} />
            <Route path="Admins" element={<Admins />} />
            <Route path="RentedCars" element={<RentedCars />} />
          </Route>
          <Route path='/page403' element={<Page403/>}/>
        </Routes>
        {!window.location.pathname.includes("admin") ? <Footer/> : null}
        
        </ProductsData.Provider>
    </BrowserRouter> 
  );
}

export default App;
