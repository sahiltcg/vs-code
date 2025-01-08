import React from 'react'
import Sqr from './sqr'
import Button from './button'
import Navbar from './navbar'
// import Button from './button'

function App() {
  return (
    <>
    <Navbar/>
    <div className='w-full h-screen flex items-center justify-center flex-col gap-5 bg-neutral-900 text-purple-500 p-5'>
      {/* <h1 className='text-3xl font-bold'>Hello World!</h1> */}
      
      <Sqr />
      {/* <Button /> */}
     <Button/>
    </div>
    </>
  )
}

export default App