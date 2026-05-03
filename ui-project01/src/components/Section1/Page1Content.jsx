import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1Content = (props) => {
  return (
    <div className='py-17 h-[90vh]  px-15 flex items-center justify-between gap-5'>
      <Leftcontent/>
      <Rightcontent users={props.users}/> 
     
    
    </div>
  )
}

export default Page1Content