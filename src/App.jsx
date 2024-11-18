import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { Footer } from "./Components/Footer";
import { Sms } from "./Pages/Service/SMS/sms";
// import { sms } from './Constant';
// import Sms from './Pages/Sms';
function App() {
  return (
    
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/Sms" Component={Sms}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
  
  );
}

export default App;
