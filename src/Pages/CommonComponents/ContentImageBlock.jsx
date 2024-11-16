import React from 'react';
import { Button } from './Button';
function ContentImageBlock({subheading,heading,content}) {
  return (
    <div>
    <div className=''>
        <p>{subheading}</p>
        <h2>{heading}</h2>
        <p>{content}</p>
    </div>
    <div className=''>
        <img></img>
    </div>
    <Button name="contact us"></Button>

      
    </div>
  )
}

export default ContentImageBlock;
