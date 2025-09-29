import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer";
import { useState } from "react";
import Login from "./components/Login";
import { Verify } from "./pages/verify/verify";
import { MyOrder } from "./pages/myOrders/myOrder";


function App() {

  const[showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
      <div className="App">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify/>} />     
          <Route path="/myorders" element={<MyOrder/>} />          

        </Routes>

      </div>
      <Footer />
    </>

  );
}

export default App;
