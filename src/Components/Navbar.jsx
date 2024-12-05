import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navbardata } from "../Constant";
import { offers } from "../Constant";
import logo from "/logo.svg";
// arrowdown icon
import { MdKeyboardArrowDown } from "react-icons/md";
// import Reactlogo ======================
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
// import Button Component================
import { Button } from "../Pages/CommonComponents/Button";
import { Card } from "../Pages/CommonComponents/Card";

function Navbar() {
  const [mobilenav, setMobilenav] = useState(false);
  const [Servicenav,setServicenav]=useState(false)
  // Handeling Service and about navbar
  function handelEvents(event)
  {
    
    console.log(event.target.parentElement.parentElement.innerText)
    if(event.target.parentElement.parentElement.innerText=="About")
    {
      handelAboutnav();

    }
    else{
      handelServicenav();

    }

  }
// handel Service nav=======================================
  function handelServicenav()
{
console.log("service nav")
 
   {
    setServicenav(!Servicenav)
   }
      
    
  }  

  // Mobile togglenav===============================================
  function mobileToggle() {
    return setMobilenav(!mobilenav);
  }
  return (
    <>
      <nav className="flex justify-between pt-3 pb-3 text-xl sticky top-0 bg-white border-b z-10">
        <div className="logo-sec">
          <img src={logo} alt="logo" height={20}></img>
        </div>
        <ul className=" hidden lg:flex gap-12 ">
          {navbardata.map((ele, ind) => {
            return (
              <li key={ind}>
                <NavLink to={ele.path}>{ele.linkname}{ ele.arrowlogo? <MdKeyboardArrowDown className="inline ml-2" onClick={handelEvents} />:""} </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:flex gap-10 items-center">
          <Button name="login"></Button>
          <NavLink>3456789</NavLink>
        </div>
        <button className="lg:hidden" onClick={mobileToggle}>
          {mobilenav ? <RxCross1 /> : <FaBars></FaBars>}
        </button>
      </nav>

      {mobilenav && (
        <div className="flex flex-col gap-12">
          <ul className=" mt-4 flex flex-col gap-12 lg:hidden text-xl">
            {navbardata.map((ele, ind) => {
              return (
                <li key={ind}>
                  <NavLink to={ele.path}>{ele.linkname}</NavLink>
                </li>
              );
            })}
          </ul>
          <div className="flex gap-8">
            <Button name="login"></Button>
            <NavLink>3456789</NavLink>
          </div>
        </div>
      )}

{
    Servicenav && (
      <div className=" h-60 hidden lg:flex">
      {
       <div className="flex">
       { 
        offers.map((ele,ind)=>{
          return <Card 
             key={ind}
              ele={ele}></Card>
        })
       }
       </div>
      }
              
      </div>
    )
  }
</>

    
  );
}

// handel Service nav ===============================================


  
    
 
//  {offers.map((ele, ind) => {
//       return (
        
//         <Card key={ind} ele={ele}></Card>
//       );
//     })}
    
  


// handel Aboutnav =================================================
function handelAboutnav()
{
  console.log("about");
  return(
    <div>
    <p>gfghkjljlkhuiyui</p>
        
      </div>
   )
}


export default Navbar;
