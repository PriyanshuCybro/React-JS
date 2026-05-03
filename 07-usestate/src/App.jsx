import React from 'react'
import { useState } from 'react'

const App = () => {

    // <==== Object ya array ka data usestate ke through change krna  bs ye ek line ke liye likha hu line no.8 ke liye>
 
//  const [obj, setobj] = useState({name:'Harsh',age:22})

  // <====== Batch Update Concept in React jsx====>
      const [num, setnum] = useState(10)
  


  // <====Counter App Project using useState==========================================>
  //   const [num, setNum] = useState(0) 
  //   const [first, setfirst] = useState('Sarthak')
  //   const[arr1,setArr1] = useState([10,20,30])


  //  function increase(){
  //      setNum(num+1)
  //  }
  //   function decrease(){
  //    setNum(num-1)
  //  }
  //   function jumpby5(){
  //    setNum(num+5)
  //  }
  //  function changeName(){
  //    setfirst('Aman')
  //  }
  //  function newArr(){
  //   setArr1([30,40,50])
  //  }


 
  // <==== Object ya array ka data usestate ke through change krna >

    // function btnclicked(){
    //    const newObj = {...obj}
    //    newObj.name = 'Baba'
    //    newObj.age = 27
    //    setobj(newObj)
    //  }
  // <==============================================================================>


  //  <===== Batch update ke liye function =====>
        function btnclicked(){
           setnum(prev=>(prev+1))
            setnum(prev=>(prev+1))
             setnum(prev=>(prev+1))

        }






  return (
    // <div>

    //  <h1>{num} {first} <br /> <br /> {arr1}</h1>
    //  <button onClick={increase}>Increase</button>
    //  <button onClick={decrease}>Decrease</button>
    //  <button onClick={jumpby5}>mujhe dabao 5 aage badhao</button>
    //  <button onClick={changeName}>Change name</button>
    // <button onClick={newArr}>Changed Array</button>
   

    // </div>
    <div>
   <h1> {num}</h1>//Batch update example ke liye hai ye
     {/* <h1>{obj.name}{obj.age}</h1> */}
     <button onClick={btnclicked}>Click</button>

    </div>
  )
}

export default App