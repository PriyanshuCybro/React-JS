import React from 'react'
import RightCard from './RightCard'

const Rightcontent = (props) => {
  return (
    <div id='right' className=' h-full w-2/3 p-5 flex flex-nowrap gap-4 rounded-2xl'>     
      {props.users.map(function(elem,idx){
         return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
      })}


        </div>
  )
}

export default Rightcontent