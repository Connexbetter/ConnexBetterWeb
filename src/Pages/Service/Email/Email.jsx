import ContentImageBlock from "../../CommonComponents/ContentImageBlock"
import Boxcontainer from "../../CommonComponents/Boxcontainer"
import { email, emailBox } from "../../../Constant"
import LeftRightBLock from "../../CommonComponents/LeftRightBLock"



export const Email=()=>{
    return(
        <section>
        <div className="container">
    <ContentImageBlock
      subheading="[Email]"
      heading="Connect with Your Ideal Customers Effortlessly Using Connex Better User-Friendly Email API "
      content="Easily connect with your perfect customers using Connex Better's super simple Email API. Count on smooth delivery, personalized touches, and the ability to grow your connections and boost your business."
    ></ContentImageBlock>
  </div>
 
  <Boxcontainer 
    heading="Delight your customers with our Email Solutions"
    para="Integrate our business emailing solution with your application and delight your customers like never before. Whether it’s one time password (OTP) for user verification, authentication requests or updates to your customers, our emailing platform is the solution for your business."
    carddata={emailBox}
    showbutton={false}></Boxcontainer>

  {/**left right content and image design block  */}

  {email.map((item,index)=>(
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
