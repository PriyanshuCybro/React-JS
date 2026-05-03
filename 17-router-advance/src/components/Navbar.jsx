import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-8 py-4 bg-emerald-400  '>
        <h2 className='text-3xl font-bold  '>PrikshHub</h2>
        <div className='flex gap-8 '>
          <Link className='text-lg font-semibold'  to='/'>Home</Link>
          <Link className='text-lg font-semibold' to='/about'>About</Link>
          <Link className='text-lg font-semibold' to='/contact'>Contact</Link>
           <Link className='text-lg font-semibold' to='/courses'>Our Courses</Link>


         
            
        </div>
        
        </div>
  )
}

export default Navbar