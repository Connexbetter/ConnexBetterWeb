import { Button } from "./Button"

export const Blogcontainer=({title,content})=>{
    return(
        <div>
        <img></img>
        <div>
            <Button name="API solution"></Button>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>

        </div>
    )
}