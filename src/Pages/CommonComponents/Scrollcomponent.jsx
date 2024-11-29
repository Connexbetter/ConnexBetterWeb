import { smsScroll } from "../../Constant";
export const Scrollcomponent=()=>{
   
        {
            smsScroll.map((ele,ind)=>{
                return(
                    <div key={ind}>
                        <h2>{ele.title}</h2>
                        <p>{ele.content}</p>
                    </div>

                )

            })
        }

    
}