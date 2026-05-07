import "../styles/Display.css"

export default function Display(){

    return (
    <>

    <div className="full-body">

    <div className="calc-display">
        <h2 className="display-value">0</h2>
    </div>

    <div className="button-container">
       
       
        <button className="operator">%</button> 
        <button className="operator">x</button>
        <button className="operator">÷</button>
       

         <button className="del">⌫</button>
        <button className="number">9</button>
        <button className="number">8</button>
        <button className="number">7</button>
        <button className="operator">-</button>
        <button className="number">6</button>
        <button className="number">5</button>
        <button className="number">4</button>
         <button className="operator">+</button>
        <button className="number">3</button>
        <button className="number">2</button>
        <button className="number">1</button>
        <button className="number">.</button>
        <button className="number">0</button>
        <button className="number">00</button>
        <button className="clear">clear</button>
        <button className="number">=</button>
       

    </div>

    </div>

    


    
    </>
    )
}