import React from 'react'

const App = () => {

  // localStorage.clear()
  // sessionStorage.clear()

   const store = localStorage.setItem('name','Priyanshu')
   console.log(localStorage.getItem('name'))
   const store2 = localStorage.setItem("Age",'26')
   console.log(localStorage.getItem('Age'))
   

  //  for object and array
  const store3 = {
    name:'Rudra Pandey',
    branch:'Information Technology',
    city: 'Gorakhpur'

  }
   localStorage.setItem('store3',JSON.stringify(store3))
    const storea = JSON.parse(localStorage.getItem('store3'))
    console.log(storea)

   localStorage.removeItem('Age')
   localStorage.clear();

   
  return (
    <div>
     

    </div>
  )
}

export default App