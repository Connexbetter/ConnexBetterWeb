import ContentImageBlock from "../../CommonComponents/ContentImageBlock"
import Boxcontainer from "../../CommonComponents/Boxcontainer"
import LeftRightBLock from "../../CommonComponents/LeftRightBLock"
import { bulkSms, bulkSmsBox } from "../../../Constant"

export const BulkSms=()=>{
    return(
        <section>
        <div className="container">
    <ContentImageBlock
      subheading="[BULK SMS]"
      heading="Send Bulk SMS worldwide with a top-rated SMS service provider."
      content="Achieve the highest SMS delivery rates worldwide using a reliable A2P bulk SMS service from Connex Better."
    ></ContentImageBlock>
  </div>
 
  <Boxcontainer 
    heading="Delight your customers with our Email Solutions"
    para="Integrate our business emailing solution with your application and delight your customers like never before. Whether it’s one time password (OTP) for user verification, authentication requests or updates to your customers, our emailing platform is the solution for your business."
    carddata={bulkSmsBox}
    showbutton={false}></Boxcontainer>

  {/**left right content and image design block  */}

  {bulkSms.map((item,index)=>(
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