import ContentImageBlock from "../../CommonComponents/ContentImageBlock"
import Boxcontainer from "../../CommonComponents/Boxcontainer"
import { whatsApp, whatsAppBox } from "../../../Constant"
import LeftRightBLock from "../../CommonComponents/LeftRightBLock"

function WhatsApp() {
  return (
    <section>
            <div className="container">
        <ContentImageBlock
          subheading="[WhatsApp Business API]"
          heading="Strengthen customer engagement with seamless WhatsApp Business API."
          content="Move beyond one-way messaging. Engage customers interactively throughout their lifecycle for stronger connections and better results."
          ></ContentImageBlock>
      </div>
     
      <Boxcontainer 
        heading="Exploring the Capabilities of the WhatsApp Business API"
        para="With the WhatsApp Business Platform, you can design and deploy conversational marketing, sales, or support use cases throughout the entire customer journey on WhatsApp over a single platform."
        carddata={whatsAppBox}
        showbutton={false}></Boxcontainer>

      {/**left right content and image design block  */}

      {whatsApp.map((item,index)=>(
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

export default WhatsApp
