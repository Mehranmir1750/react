import { useState } from "react";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";
import "../styles/Display.css"

export default function(){
    
    
    const [start, setStart] = useState("0")
const [firstNumber, setFirstNumber] = useState(null);
const [operator, setOperator] = useState("");
const [expression, setExpression] = useState("");

function handleOperation(operant){

        setFirstNumber(Number(start));
        setOperator(operant);
        setExpression(start + operant);
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

    if(operator === '%'){
    setStart(String(firstNumber % secondnumber));
}
   }

   return (

   <div className="full-body">

      <Display start={start} />

      <ButtonGrid
         start={start}
         setStart={setStart}
         handleOperation={handleOperation}
         handleEqual={handleEqual}
      />

   </div>

)

}