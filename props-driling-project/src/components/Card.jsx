import React from 'react'
import { Bookmark } from 'lucide-react';
const Card = (props) => {

  console.log(props);


  return (
    <div className="card">
      <div className="top">
         <img src={props.logo} alt="" />
        <button> Save <Bookmark size={12} /></button>
      </div>
      <div className="center">
        <h3>{props.company} <span>{props.posted}</span></h3>
        <h2>Senior UI/UX Designer</h2>
        <div className='tag'>
          <h4>Part-time</h4>
          <h4>Senior level</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>$120/hr</h3>
          <p>San Francisco,CA</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>


   
  )
}

export default Card