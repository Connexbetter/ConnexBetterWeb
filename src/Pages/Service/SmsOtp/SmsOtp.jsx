import ContentImageBlock from "../../CommonComponents/ContentImageBlock"
import Boxcontainer from "../../CommonComponents/Boxcontainer"
import LeftRightBLock from "../../CommonComponents/LeftRightBLock"
import { smsOtp, smsOtpBox } from "../../../Constant"



export const SmsOtp=()=>{
    return(
        <section>
            <div className="container">
        <ContentImageBlock
          subheading="[OTP AUTHENTICATOR]"
          heading="Best OTP SMS Service Provider in India"
          content="Enhance user security with our OTP service. Ensure smooth identity verification for online transactions while safeguarding data through dependable OTP SMS authentication via SMS, WhatsApp, RCS, Email, or Voice worldwide."
        ></ContentImageBlock>
      </div>
     
      <Boxcontainer 
        heading="Discover key features of RCS for businesses"
        para="Enhance your interaction using RCS's advanced communication tools. Explore each section to discover the essential features of RCS A2P messaging."
        carddata={smsOtpBox}
        showbutton={false}></Boxcontainer>

      {/**left right content and image design block  */}

      {smsOtp.map((item,index)=>(
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