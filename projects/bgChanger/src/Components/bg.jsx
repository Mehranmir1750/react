import React from "react";
import { useState } from "react";

function BgChanges(){

    const[BgColor,setBgColor ] = useState("white");

    const convertRed = ()=>{
        setBgColor("red");
    };

    const convertTeal = ()=>{
        setBgColor("teal");
    };

    const convertGreen = ()=>{
        setBgColor("green");
    };

     const convertPurple = ()=>{
        setBgColor("purple");
    };

     const convertPink = ()=>{
        setBgColor("pink");
    };

     const convertBlue = ()=>{
        setBgColor("blue");
    };


    return (

        <div className="h-screen flex items-center justify-center gap-4"
      style={{ backgroundColor: BgColor }}>
        

        <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5" onClick={convertRed}>Red</button>
        <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5" onClick={convertTeal}>Teal</button>
        <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5" onClick={convertGreen}>Green</button>
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5" onClick={convertBlue}>Blue</button>
        <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5" onClick={convertPurple}>Purple</button>
        <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5" onClick={convertPink}>pink</button>
        
        
        </div>


    )


}

export default BgChanges