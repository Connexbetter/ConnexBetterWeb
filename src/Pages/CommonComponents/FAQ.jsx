import { homeFAQ } from "../../Constant"
import { Accordian } from "./Accordian";
import { CommonHeading } from "./CommonHeading";
export const FAQ = () => {
    return (
        <>
        <div className=" grid md:grid-cols-2 gap-3 container">
        <div className=""> <CommonHeading h="FAQ" p="Find quick answers to your questions about our API services, integration, and support."></CommonHeading></div>
        <div>
        {homeFAQ.map((val) => (
            <div className="mb-2">
            <Accordian key={val.id} val={val}/>
            </div>
               
            ))}
        </div>

        </div>
       
           
        </>
    );
};