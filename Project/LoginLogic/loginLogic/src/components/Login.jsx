import { useState } from "react";
import InputField from "./InputField";

export default function Login(){

    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

    function logicCheck(){
        if(email === "mehran@gmail.com" && password ==="1234567890"){
             alert("Login Successful");
        }
        else{
             alert("Login ");
        }
    }

    return(
        <>

        <InputField  logicCheck={logicCheck}
   email={email}
   setEmail={setEmail}
   password={password}
   setPassword={setPassword} />
        
        </>
    )
}