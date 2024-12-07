import { ivr,ivrBox,ivrSolutions } from "../../../Constant"
import ContentImageBlock from "../../CommonComponents/ContentImageBlock"
import Boxcontainer from "../../CommonComponents/Boxcontainer"
import LeftRightBLock from "../../CommonComponents/LeftRightBLock"
export const Ivr=()=>{
    return(
        <section>
        <div className="container">
    <ContentImageBlock
      subheading="[IVR System]"
      heading="Interactive Voice Response System (IVR) for your Business"
      content="Discover the best Interactive Voice Response (IVR) system in India, designed to streamline customer interactions and improve efficiency for businesses of all sizes with our tailored IVR solutions."
    ></ContentImageBlock>
  </div>
 
  <Boxcontainer 
    heading="Delight your customers with our Email Solutions"
    para="Integrate our business emailing solution with your application and delight your customers like never before. Whether it’s one time password (OTP) for user verification, authentication requests or updates to your customers, our emailing platform is the solution for your business."
    carddata={ivrBox}
    showbutton={false}></Boxcontainer>

  {/**left right content and image design block  */}

  {ivr.map((item,index)=>(
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
  <Boxcontainer 
    heading="Delight your customers with our Email Solutions"
    para="Integrate our business emailing solution with your application and delight your customers like never before. Whether it’s one time password (OTP) for user verification, authentication requests or updates to your customers, our emailing platform is the solution for your business."
    carddata={ivrSolutions}
    showbutton={false}></Boxcontainer>

    </section>
    )
}