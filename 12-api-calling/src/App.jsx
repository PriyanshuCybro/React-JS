import axios from 'axios'
import { useState } from 'react'

const App = () => {
// 1. api call using fetch() 
//  async function apicall(){
//      const response = await  fetch('https://jsonplaceholder.typicode.com/todos/1')
//       console.log(response)
//   }

// const apicall = async() => {
//  const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/5')
//   const data = await response1.json()
//    console.log(data)
// }


// //2. api calling using axios
//  const getdata = async () =>{
//       const response = await axios.get('https://jsonplaceholder.typicode.com/users')
//        console.log(response.data)
//  }


// important exapmle using axios of api calling
const [data, setdata] = useState([])

 const getdata = async () =>{
      const response = await axios.get('https://picsum.photos/v2/list')
      //  console.log(response.data)
      setdata(response.data)
 } 








  return (
    <div>
       <button onClick={getdata}>Click kro</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>Hello,{elem.author} {idx}</h3>
        })}
      </div>
      </div>
  )
}

export default App