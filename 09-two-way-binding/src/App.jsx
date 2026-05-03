import React from 'react'
import { useState } from 'react';

const App = () => {
  
   const [title, setTitle] = useState('')
   const formHandler = (e)=>{
    e.preventDefault();
    console.log("form submitted sucessfully")

    setTitle('')
      
   }

  return (
    <div>
       <form onSubmit={(e)=>{
         formHandler(e);
       }}>
        <input onChange={(e)=>{
           setTitle(e.target.value)
           
        }} value={title} type="text" placeholder='Enter Your Name' />
        <button>Submit</button>
       </form>

    </div>
  )
}

export default App