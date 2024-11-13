import React from 'react'
import { Button } from './Pages/CommonComponents/Button';
import Navbar from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar></Navbar>
   <Button name="contact us"></Button>
   </BrowserRouter>
      
    </>
  )
}

export default App
