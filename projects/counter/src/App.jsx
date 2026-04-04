import { use, useState } from "react"

function App() {
  
  let [Counter , setCounter] = useState(0)
  // let counter = 0


  const addvalue = () =>{
    setCounter(Counter+1)
    console.log("Clicked!",Counter)
  }

  const decvalue = () =>{
    if(Counter>0){
      setCounter(Counter-1)
      console.log("-",Counter)
    }
  }

  return (
    <>
      <h1>Chai And React</h1>
      <h2>Counter Value: {Counter}</h2>

      <button onClick={addvalue}>Add Value</button>
      <button onClick={decvalue}>Decrease Value</button>
    </>
  )
}

export default App
