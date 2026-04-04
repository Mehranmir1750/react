import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-blue-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
     <Card username = "zargar" btnText ="read me"/>
     <Card username = "Sajad" />

    </>
  )
}

export default App
