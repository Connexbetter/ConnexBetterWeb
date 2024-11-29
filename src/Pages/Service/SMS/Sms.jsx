import ContentImageBlock from "../../CommonComponents/ContentImageBlock";
import Boxcontainer from "../../CommonComponents/Boxcontainer";
import smsheroimg from "../../../assets/SMS-20241116T100910Z-001/SMS/Lottie/SMS Hero section.json";
import { sms, smsProvider,smsScroll } from "../../../Constant";
import LeftRightBLock from "../../CommonComponents/LeftRightBLock";
import Lottie from "lottie-react";
import { CommonHeading } from "../../CommonComponents/CommonHeading";
import { Scrollcomponent } from "../../CommonComponents/scrollcomponent";
export const Sms=()=>{
    return(
        <section>
            <div className="container">
        <ContentImageBlock
          subheading="[SMS API]"
          heading="Send SMS worldwide with a top-rated SMS service provider. "
          content="Achieve the highest SMS delivery rates worldwide using a reliable A2P SMS service from Connex Better."
          ></ContentImageBlock>
      </div>
     
      <Boxcontainer 
        heading="A comprehensive global SMS provider that handles everything."
        para="Our A2P SMS service supports diverse use cases, delivering top-notch delivery rates. It includes advanced fraud protection, personalization options, and more."
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
      <div className="container grid lg:grid-cols-2 ">
      <CommonHeading 
         h="How to choose an SMS provider"
        p="Here are the key factors you should consider when choosing an SMS provider.">

        </CommonHeading>
        <div className="h-80 overflow-y-scroll ">
         {
          smsScroll.map((ele,ind)=>{
            return(
              <div>
                <h2 className="text-xl font-medium">{ele.title}</h2>
                <p>{ele.content}</p>
              </div>
            )
          })

         }
        </div>

      </div>
      
        </section>


    )
}