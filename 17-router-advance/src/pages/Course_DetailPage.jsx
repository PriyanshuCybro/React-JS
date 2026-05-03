import React from 'react'
import { useParams } from 'react-router-dom'

const Course_DetailPage = () => {

   const Params = useParams()
    console.log(Params)
   
     
  return (
    <div>

        <h1>{Params.id}Course_DetailPage</h1>
    </div>
  )
}

export default Course_DetailPage