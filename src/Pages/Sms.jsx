import React from 'react'
//import { sms } from '../Constant'
function Sms(props) {
  return (
    <div className='grid gap-4 md:grid-cols-2'>
        <div>
            <h2 className='text-xl'>{props.title}</h2>
            <p>{props.content}</p>
        </div>
        <div>
            <img/>
        </div>
      
    </div>
  )
}

export default Sms
