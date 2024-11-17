import { footerpart } from "../Constant/index"
export const Footer=()=>{
    return(
         <>
            <section>
                <div className=" p-3 grid gap-3 md:grid-cols-4 justify-center bg-secondary">
            {
                footerpart.map((ele, ind) => {
                  return (ind === 0 ? (
            <div key={ind}>
            <img src={ele.h} className="w-44" alt="Footer Image" />
               <li className="text-lg">{ele.l1}</li>
                <li>{ele.l2}</li>
                <li>{ele.l3}</li>
                <li>{ele.l4}</li>
                <li>{ele.l5}</li>
            </div>) : (
            <div key={ind}>
                <ul className="text-lg">{ele.h}</ul>
                <li>{ele.l1}</li>
                <li>{ele.l2}</li>
                <li>{ele.l3}</li>
                <li>{ele.l4}</li>
                <li>{ele.l5}</li>
            </div>
        )
    );
})                        
                    
}
     </div>
            </section>
        </>
    )
}