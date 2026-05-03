import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section1/section2/Section2'

const App = () => {

  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1675626487177-c3d2f8d9ccf7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "satisfied",

    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661590850278-9a4d2f6116d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "underserved",

    },
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "",
      tag: "underbanked",

    },
  ]

  


  return (
    <div>
      <Section1 users={users}/>
       <Section2/>
      
    </div>
  )
}

export default App