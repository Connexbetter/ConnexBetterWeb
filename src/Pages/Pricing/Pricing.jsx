import { CommonHeading } from "../CommonComponents/CommonHeading"
import { FAQ } from "../CommonComponents/FAQ"
import { Pricebox } from "../CommonComponents/Pricebox"

export const Pricing=()=>{
    return(
        <>
            <div className="container">
            <CommonHeading h="Unbeatable Pricing
           Find Your Perfect Plan Now" p="Discover How Our Innovative Approach Can Savo You Money and Boost Your Business Performance!"></CommonHeading>
       <div className="grid md:grid-cols-3 gap-10 ">
        <Pricebox></Pricebox>
       </div>
       </div>
       <FAQ></FAQ>
        </>
       

       
    )
}