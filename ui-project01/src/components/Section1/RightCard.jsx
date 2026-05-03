import React from 'react'
import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
    <div className='h-full  w-60  rounded-3xl overflow-hidden relative'>
<img className='h-full w-full object-cover' class src={props.img} alt="" />
 
    <RightCardContent id={props.id} tag={props.tag}/>
    
    </div>
  )
}

export default RightCard