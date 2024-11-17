import React from 'react'
import { CommonHeading } from './CommonHeading';
import { Card } from './Card';

function Boxcontainer({heading,para,carddata}) {
  return (

<div className='container'>
  <CommonHeading h={heading} p={para}></CommonHeading>
  <div  className=' grid gap-6 lg:grid-cols-3 md:grid-cols-2'>
  {carddata.map((ele,ind)=>{
    return(
        <Card key={ind} title={ele.title} content={ele.content} img={ele.img}></Card>
    )
    
  })}

  </div>
  </div>
  )
}

export default Boxcontainer
