import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navbardata } from '../Constant';
import logo from "/logo.svg"
// import Reactlogo ======================
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
// import Button Component================
import { Button } from '../Pages/CommonComponents/Button';

function Navbar() {
  const[mobilenav,setMobilenav]=useState(false);
  function mobileToggle(){
    return(
     setMobilenav(!mobilenav)
    )
  }
  return (
    <>
   <nav className='flex justify-between pt-3 pb-3 text-xl sticky top-0 bg-white border-b'>
   <div className='logo-sec'>
    <img src={logo} alt='logo' height={20}></img>           
   </div>
   <ul className=' hidden lg:flex gap-12 '>
    {
      navbardata.map((ele,ind)=>{
            return(
                <li key={ind}><NavLink to={ele.path}>{ele.linkname}</NavLink></li>
            )
        })
    }
   </ul>
   <div className='hidden lg:flex gap-10 items-center'>  

    <Button name="login"></Button>
    <NavLink>3456789</NavLink>
   </div>
   <button  className="lg:hidden" onClick={mobileToggle} >
   {mobilenav?<RxCross1 />:<FaBars></FaBars>}
   </button>
   </nav>

   {mobilenav && <div className='flex flex-col gap-12'>

    <ul className=' mt-4 flex flex-col gap-12 lg:hidden text-xl'>
    {
      navbardata.map((ele,ind)=>{
            return(
                <li key={ind}><NavLink to={ele.path}>{ele.linkname}</NavLink></li>
            )
        })
    }
  </ul>
  <div className='flex gap-8'>  
  <Button name="login"></Button>
    <NavLink>3456789</NavLink>
   </div>
  

   </div>}



   </>
  )
}

export default Navbar;
