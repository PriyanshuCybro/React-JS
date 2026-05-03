import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        {/* <h1>Contact Page</h1> */}
        <div className='flex justify-center gap-10 py-4'> 
            <Link className='text-xl font-semibold '  to='/contact/men'>Men</Link>
            <Link className = 'text-xl font-medium' to='/contact/women'>Female</Link>
            <Link className = 'text-xl font-medium' to='/contact/kids'>Kids</Link>

        </div>
        <Outlet/>
    </div>
  )
}

export default Contact