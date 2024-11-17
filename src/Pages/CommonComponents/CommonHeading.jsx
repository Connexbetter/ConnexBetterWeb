export const CommonHeading=({h,p})=>{
    return(
        <>
            <div className="flex flex-col gap-3 pb-3">
                <h2 className="text-3xl">{h}</h2>
                <p className="text-lg">{p}</p>
            </div>
        </>
    )
}
