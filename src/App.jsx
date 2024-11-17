import React from 'react'
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { Footer } from './Components/Footer';
// import { sms } from './Constant';
// import Sms from './Pages/Sms';
function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar></Navbar>
   <Routes>
    <Route path='/' Component={Home}></Route>
   </Routes>
   <Footer></Footer>
    
   </BrowserRouter>
      
    </>
  )
}

export default App
