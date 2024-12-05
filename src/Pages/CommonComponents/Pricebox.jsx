import { Button } from "./Button"
import { smsprice } from "../../Constant";
import { FaRegCircleCheck } from "react-icons/fa6";
export const Pricebox=()=>{
    return(

        <>
            
          {smsprice.map((ele)=>{
            return(
                <div key={ele.id} className="relative p-10 border gap-2 rounded-lg bg-secondary flex flex-col ">
                {ele.bestprice?(
                    <div className="absolute -top-8 -right-8 border bg-primery flex items-center h-20 w-20 rounded-full text-white"><p className="text-lg p-4">Best Price</p></div>):""}
                        <h2 className="text-primery font-bold text-2xl">{ele.heading1}</h2>
                         <h2 className="text-primery font-semibold text-xl">{ele.heading2}</h2>
                        <h2 className="text-primery font-semibold text-xl">{ele.heading3}</h2>
               {[ele.list1, ele.list2, ele.list3, ele.list4, ele.list5, ele.list6].map(
            (item, index) =>
              item && (
                <div className="flex items-center gap-3">
                <div><FaRegCircleCheck  className="text-xl bg-primery text-white rounded-full"/></div>
   
                <p key={index} className="text-lg">
                  {item}
                </p>
                </div>
               
              )
          )}
                        <Button name="Get Demo"></Button>
                        </div>
                )
            })
          }
        </>
    )
  


          
            }
    

    
    
          
