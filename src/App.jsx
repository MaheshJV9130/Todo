import React from 'react'
import Navbar from './components/Navbar'
import InputComponent from './components/InputComponent'

const App = () => {
  return (
    <>
      <Navbar/>
      
      <main className='w-[90vw] min-h-[80vh] bg-[#E1F4F3] rounded-xl mx-auto my-8 overflow-y-auto overflow-x-hidden'>
        <InputComponent/>
      </main>
    </>
  )
}

export default App


