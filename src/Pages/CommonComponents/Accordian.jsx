import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { useState } from "react";
export const Accordian=({val})=>{
    
    const [hide,setHide]=useState(false)
    function handelArrowbtn()
    {
       setHide(!hide)
    }
   
    return(
        <div className="bg-tertiaryc">
            <div className="border cursor-pointer flex p-5 justify-between" >{val.que}<span onClick={()=>handelArrowbtn()}>{hide?<IoIosArrowUp/>:<IoIosArrowDown />}</span></div>
            <div className={`${hide ? "nothide" : "hide"} p-5`}>{val.ans}</div>
        </div>


    )
}