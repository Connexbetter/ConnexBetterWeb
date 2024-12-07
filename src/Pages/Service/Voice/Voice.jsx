import ContentImageBlock from "../../CommonComponents/ContentImageBlock"
import Boxcontainer from "../../CommonComponents/Boxcontainer"
import { voiceBox } from "../../../Constant"

export const Voice=()=>{
    return(
        <section>
        <div className="container">
    <ContentImageBlock
      subheading="[Voice]"
      heading="Integrate and tailor voice calls within various applications using the Voice API."
      content="Quickly provision and deploy custom voice solutions with flexible APIs on the most extensive global network. Tailor voice solutions to your needs"
    ></ContentImageBlock>
  </div>
 
  <Boxcontainer 
    heading="Explore Our Other Solutions"
    para=""
    carddata={voiceBox}
    showbutton={false}></Boxcontainer>
    </section>
    )
}