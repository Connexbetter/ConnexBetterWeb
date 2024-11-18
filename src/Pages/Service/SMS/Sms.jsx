import ContentImageBlock from "../../CommonComponents/ContentImageBlock";
import Boxcontainer from "../../CommonComponents/Boxcontainer";
import { smsProvider } from "../../../Constant";
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
        </section>
    )
}