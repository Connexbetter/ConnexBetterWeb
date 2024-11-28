import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { Footer } from "./Components/Footer";
import { Sms } from "./Pages/Service/SMS/Sms";
import { Rcs } from "./Pages/Service/RCS/Rcs";
import  WhatsApp  from "./Pages/Service/WhatsAppBusinessApi/WhatsApp"
import { Email } from "./Pages/Service/Email/Email";
import { SmsOtp } from "./Pages/Service/SmsOtp/SmsOtp";
import { InternationalSms } from "./Pages/Service/InternationalSms/InternationalSms";
import { BulkSms  } from "./Pages/Service/BulkSms/BulkSms";
// import { sms } from './Constant';

function App() {
  return (
    
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/Sms" Component={Sms}></Route>
          <Route path="/Rcs" Component={Rcs}></Route>
          <Route path="/WhatsApp" Component={WhatsApp}></Route>
          <Route path="/Email" Component={Email}></Route>
          <Route path="/InternationalSms" Component={InternationalSms}></Route>
          <Route path="/SmsOtp" Component={SmsOtp}></Route>
          <Route path="/BulkSms" Component={BulkSms}></Route>
        </Routes>
        {/* <FAQ></FAQ> */}
        <Footer/>
        
      </BrowserRouter>
  
  );
}

export default App;
