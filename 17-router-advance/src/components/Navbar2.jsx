import { useNavigate } from 'react-router-dom'


const Navbar2 = () => {

 const navigate = useNavigate()
  return (
    <div className='py-2 px-4 bg-emerald-700'>
         
         <button onClick={()=>{
            navigate('/')
         }} className='bg-blue-300 px-5 py-2 rounded m-2 active:scale-95' >Return to Home Page</button>

          <button onClick={()=>{
            navigate(-1)
         }} className='bg-blue-300 px-5 py-2 rounded m-2 active:scale-95' >Back</button>

           <button onClick={()=>{
            navigate(+1)
         }} className='bg-blue-300 px-5 py-2 rounded m-2 active:scale-95' >Next</button>
    </div>
  )
}

export default Navbar2