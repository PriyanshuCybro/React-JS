import React from 'react'

const Form = () => {
  return (
    <>
    <form action="" className='form'>
        <h1 className='h1'>Login Page</h1><br />
        
     <label >Name:</label><br />
     <input type="text" placeholder='Enter Your Name' /><br /><br />

    <label>Email:</label><br />
    <input type="email" placeholder="Enter email" /><br /><br />

    <label>Password:</label><br />
    <input type="password" placeholder="Enter password" /><br /><br />

    

    <button type="submit">Login</button>
    </form>




    </>
  )
}

export default Form