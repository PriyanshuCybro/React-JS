import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


// const App = () => {


//   const [num, setNum] = useState(0)
//   const [num2, setNum2] = useState(100)
   
//   useEffect(function(){
//      console.log("UseEffect is working now")
//   },[num])

//   return (
//     <div> 


//       <h1>num is {num}</h1>
//       <h2>num2 is  {num2}</h2>
//       <button onClick={()=>{
//            setNum(num+1)
//            }}
           
//            onDoubleClick={()=>{
//              setNum2(num2+100)
//            }}
           
//            >Click</button>




//     </div>
//   )
// }

// ye doosra example yha se



const App = () => {

   const [a, setA] = useState(0)
   const [b, setB] = useState(0)

   function aChanging(){
    console.log("A ki value change ho rhi bhai..")

   }

   function bChanging(){
    console.log("B ki value change ho rhi bhai..")
   }

    useEffect(function(){
      //  console.log("Are chl rha hu mai UseEffect hu beta...")
      aChanging()
     
    },[a])

  return (
    <div> 

     <h1>Value of A is {a} </h1>
      <button onClick={()=>{
        setA(a+1)
     }}>Change A</button>
     <h1>Value of B is {b}</h1>
    
     <button onClick={()=>{
         setB(b-1)
     }}>Change B</button>





    </div>
  )
}












export default App