import React from 'react'

const App = () => {
   function inputchanging(elem){
       console.log(elem)
   }
  return (
    <div >
      
      <input  onChange={(elem)=>{
        inputchanging(elem.target.value)
      }} type="text" placeholder='Enter you name' m-10 p-15 />
    
     </div>

   
  )
}

export default App