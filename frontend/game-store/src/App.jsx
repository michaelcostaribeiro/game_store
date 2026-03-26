import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <>
      <header className=' bg-primary'>
        <Navbar />
      </header>
      <main className='md:max-w-screen-sm xl:max-w-screen-xl'>
        <Home/>
      </main>
    </>
  )
}

export default App
