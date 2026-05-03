import React from 'react'

const Card = (props) => {
    // console.log(chacha);
  return (
    
    <div className = 'parent'>
        
    <div className='card'>
        
        <img src={props.img} alt="" />
        <h1> {props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident iure fuga nostrum, possimus debitis reprehenderit.</p>
        <button>Profile</button>
    </div>
   
    </div>
  )
}

export default Card