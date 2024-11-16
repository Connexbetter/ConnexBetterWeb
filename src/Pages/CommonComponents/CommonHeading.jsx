export const CommonHeading=(props)=>{
    return(
        <>
            <div className="flex flex-col gap-3 pb-3">
                <h2 className="text-3xl">{props.heading}</h2>
                <p className="text-lg">{props.para}</p>
            </div>
        </>
    )
}
