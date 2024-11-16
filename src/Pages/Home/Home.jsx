import React from 'react';
import { offers } from '../../Constant';
import { chooseConnex } from '../../Constant';
import { Card } from '../../Pages/CommonComponents/Card';
import { CommonHeading } from '../CommonComponents/CommonHeading';
import ContentImageBlock from "../CommonComponents/ContentImageBlock";


function Home() {

 return (
    
    <section className='hero-section section'>
    {/* What WE offer */}
    <div className='container'>
    <CommonHeading heading="What we Offers" para="We offer a full suite of communication APIs designed to connect businesses with customers. Our services include:"></CommonHeading>

        <div className=' grid gap-4  md:grid-cols-2 lg:grid-cols-3'>
        {
    offers.map((ele,ind)=>{
      return(
        <Card key={ind} title={ele.title} content={ele.content} img={ele.img}></Card>
      )
     })
   }
</div>
</div>
{/* why choose Connex Better */}
<div className='container'>
  <CommonHeading heading="Why do businesses choose Connex Better" para="Connex Better provides reliable communication solutions and seamless API integration, ensuring smooth operations and enhanced customer interactions."></CommonHeading>
  <div  className=' grid gap-4 md:grid-cols-3'>
  {
    chooseConnex.map((ele,ind)=>{
      return(
        <Card key={ind} title={ele.title} content={ele.content} img={ele.img}></Card>
      )
    })
  }
  </div>
  </div>

  <div className='container'>
  <ContentImageBlock subheading="Get Started Today" heading="Start sending SMS with Connex Better for free " content="Sign up today and create your perfect customer engagement experience."></ContentImageBlock>

  </div>



  </section>
  )
}

export default Home
