import ContentImageBlock from "../../CommonComponents/ContentImageBlock";
import Boxcontainer from "../../CommonComponents/Boxcontainer";
import { sms, rcsbox, rcs } from "../../../Constant";
import LeftRightBLock from "../../CommonComponents/LeftRightBLock";

export const Rcs=()=>{
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
        carddata={rcsbox}
        showbutton={false}></Boxcontainer>

      {/**left right content and image design block  */}

      {rcs.map((item,index)=>(
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