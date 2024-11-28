import { internationalSms, internationalSmsBox } from "../../../Constant"
import Boxcontainer from "../../CommonComponents/Boxcontainer"
import ContentImageBlock from "../../CommonComponents/ContentImageBlock"
import LeftRightBLock from "../../CommonComponents/LeftRightBLock"


export const InternationalSms=()=>{
    return(
        <section>
            <div className="container">
        <ContentImageBlock
          subheading="[RCS API]"
          heading="Create memorable conversational experiences with RCS Business Messaging"
          content="Interact with clients using branded conversational messaging on RCS."
        ></ContentImageBlock>
      </div>
     
      <Boxcontainer 
        heading="Discover key features of RCS for businesses"
        para="Enhance your interaction using RCS's advanced communication tools. Explore each section to discover the essential features of RCS A2P messaging."
        carddata={internationalSmsBox}
        showbutton={false}></Boxcontainer>

      {/**left right content and image design block  */}

      {internationalSms.map((item,index)=>(
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