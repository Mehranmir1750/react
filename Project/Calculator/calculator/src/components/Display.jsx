import { useState } from "react"
import "../styles/Display.css"

export default function Display({start}){

    return (
    <>

    <div className="full-body">

    <div className="calc-display">
        <h2 className="display-value">{start}</h2>
    </div>

    
    </div>


    
    </>
    )
}