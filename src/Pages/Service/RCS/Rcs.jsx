import ContentImageBlock from "../../CommonComponents/ContentImageBlock";
import Boxcontainer from "../../CommonComponents/Boxcontainer";
import { sms, smsProvider } from "../../../Constant";
import LeftRightBLock from "../../CommonComponents/LeftRightBLock";

export const Rcs=()=>{
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