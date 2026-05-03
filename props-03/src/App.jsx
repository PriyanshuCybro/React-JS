import React from 'react'
import Card from './Card'

const App = () => {
  return (
    <div>
      <Card user='Aman' age={18} img='https://images.unsplash.com/photo-1776033615277-6834892c5042?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
      <Card user="Aakash" age={22} img="https://plus.unsplash.com/premium_photo-1775450651387-2a2085698dad?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
    </div>
  )
}

export default App