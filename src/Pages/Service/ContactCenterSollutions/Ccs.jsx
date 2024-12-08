export const Ccx=()=>{
    return(
        <section>
        <div className="container">
    <ContentImageBlock
      subheading="[Contact Center Solution]"
      heading="An entire call center, right within your browser "
      content="Enhance your agents' capabilities by enabling them to dial, receive, and manage calls directly from the unified interface of Connex Better."
    ></ContentImageBlock>
  </div>
 
  <Boxcontainer 
    heading="Discover the Amazing Features of Our Call Center Software"
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