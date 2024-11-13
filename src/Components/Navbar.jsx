import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navbardata } from '../Constant';
import { FaBars } from "react-icons/fa6";
import { Button } from '../Pages/CommonComponents/Button';
function Navbar() {
  const[mobilenav,setMobilenav]=useState(false);
  function mobileToggle(){
    return(
     setMobilenav(!mobilenav)
    )
  }
  return (
   <nav className='flex justify-between pt-3 text-xl'>
   <div className='logo-sec'>
    <img src="" alt='logo'></img>           
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
   <div className='hidden lg:flex gap-10'>  

<Button name="login"></Button>
    <NavLink>3456789</NavLink>
   </div>
   <button  className="lg:hidden" onClick={mobileToggle} >
   {mobilenav?8:<FaBars></FaBars>}
   </button>
   </nav>
  )
}

export default Navbar;
