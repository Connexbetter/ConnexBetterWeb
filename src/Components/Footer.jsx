import { footerpart } from "../Constant/index"
export const Footer=()=>{
    return(
         
        
        <>
            <section>
                <div className="container grid md:grid-cols-4">
            {
                    footerpart.map((ele,ind)=>{
                        return(
                            <div key={ind} >
                                <ul>{ele.h}</ul>
                                <li>{ele.l1}</li>
                                <li>{ele.l2}</li>
                                <li>{ele.l3}</li>
                                <li>{ele.l4}</li>
                                <li>{ele.l5}</li>
                            </div>
                        )
                    })
                }
                

                </div>
            </section>
        </>
    )
}