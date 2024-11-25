import ContentImageBlock from "../../CommonComponents/ContentImageBlock";
import Boxcontainer from "../../CommonComponents/Boxcontainer";
import smsheroimg from "../../../assets/SMS-20241116T100910Z-001/SMS/Lottie/SMS Hero section.json";
import { sms, smsProvider } from "../../../Constant";
import LeftRightBLock from "../../CommonComponents/LeftRightBLock";
import Lottie from "lottie-react";
export const Sms=()=>{
    return(
        <section>
            <div className="container">
        <ContentImageBlock
          subheading="Get Started Today"
          heading="Start sending SMS with Connex Better for free "
          content="Sign up today and create your perfect customer engagement experience."
          ></ContentImageBlock>
      </div>
     
      <Boxcontainer 
        heading="Why do businesses choose Connex Better"
        para="Connex Better provides reliable communication solutions and seamless API integration, ensuring smooth operations and enhanced customer interactions."
        carddata={smsProvider}
        showbutton={false}></Boxcontainer>

      {/**left right content and image design block  */}

      {sms.map((item,index)=>(
        <div className="container " >
           <LeftRightBLock
        key={index}
        contentOnLeft={item.contentOnLeft}
        title={item.title}
        content={item.content}
        image={item.img}
/>
        </div>
       
      ))}
        </section>


    )
}