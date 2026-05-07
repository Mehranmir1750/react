import { useState } from "react"
import "../styles/Display.css"

export default function Display(){

    const [start, setStart] = useState("0")
     const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState("");

    function handleOperation(operant){

        setFirstNumber(Number(start));
        setOperator(operant);
         setStart("0");
        
    }

   function handleEqual(){

    const secondnumber = Number(start);

    if(operator === '+'){
        setStart(String(firstNumber + secondnumber));
    }

    if(operator === '-'){
        setStart(String(firstNumber - secondnumber));
    }

    if(operator === '*'){
        setStart(String(firstNumber * secondnumber));
    }

    if(operator === '/'){
        setStart(String(firstNumber / secondnumber));
    }

}
    return (
    <>

    <div className="full-body">

    <div className="calc-display">
        <h2 className="display-value">{start}</h2>
    </div>

    <div className="button-container">
       
       
        <button className="operator">%</button> 
        <button className="operator" onClick={()=> handleOperation("*")}>x</button>
        <button className="operator" onClick={()=> handleOperation("/")}>÷</button>
       

         <button className="del" onClick={()=> setStart(start === "0" ? "0" : start.slice(0,-1))}>⌫</button>
        <button className="number" onClick={()=>setStart(start === "0" ? "9" : start + "9")}>9</button>
        <button className="number" onClick={()=>setStart(start === "0" ? "8" : start + "8")}>8</button>
        <button className="number" onClick={()=>setStart(start === "0" ? "7" : start + "7")}>7</button>
        <button className="operator" onClick={()=> handleOperation("-")}>-</button>
        <button className="number" onClick={()=>setStart(start === "0" ? "6" : start + "6")}>6</button>
        <button className="number" onClick={()=>setStart(start === "0" ? "5" : start + "5")}>5</button>
        <button className="number" onClick={()=>setStart(start === "0" ? "4" : start + "4")}>4</button>
         <button className="operator" onClick={()=> handleOperation("+")}>+</button>
        <button className="number" onClick={()=>setStart(start === "0" ? "3" : start + "3")}>3</button>
        <button className="number" onClick={()=>setStart(start === "0" ? "2" : start + "2")}>2</button>
        <button className="number" onClick={()=>setStart(start === "0" ? "1" : start +"1")}>1</button>
        <button className="operator">.</button>
        <button className="number">0</button>
        <button className="number">00</button>
        <button className="clear" onClick={()=> setStart("0")}>clear</button>
        <button className="operator" onClick={handleEqual}>=</button>
       

    </div>

    </div>

    


    
    </>
    )
}