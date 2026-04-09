import { useState } from 'react'
import Slidebar from "./components/Sidebar"
import ChatWindow from "./components/ChatWindow"

import './App.css'

function App() {

  return (
  <>

    <div style={{display:"flex", height: "100vh"}}>
      <Slidebar></Slidebar>
      <ChatWindow></ChatWindow>
  
    </div>


     
    </>
  )
}

export default App
