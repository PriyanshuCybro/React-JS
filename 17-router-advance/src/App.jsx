import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import Notfound from './pages/Notfound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './Courses'
import Course_DetailPage from './pages/Course_DetailPage'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white' >
      <Navbar/>
      <Navbar2/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/about' element={<About/>}/>

        <Route path='/contact' element={<Contact/>}>
        
        <Route path='men' element={<Men/>}/> 
        <Route path='women' element={<Women/>}/>
        <Route path='kids' element={<Kids/>}/>
     
        </Route>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:id' element={<Course_DetailPage/>}/>
        

        {/* for page not found */}
        <Route path='*' element={<Notfound/>}/>


        
        
      </Routes>
      <Footer/>
      </div>
  )
}

export default App