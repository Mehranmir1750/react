import Button from "./Button"

export default function InputField({logicCheck,
     email,
   setEmail,
   password,
   setPassword
}){

    return(
        <>
        

        <h2>Login</h2>

        <label>Enter email:</label>
        <input type="text" id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} ></input>
        
        <label>Enter Password:</label>
        <input type="password" id="password"
        value={password}
         onChange={(e) => setPassword(e.target.value)} ></input>

        <Button onClick ={logicCheck} ></Button>
        
        
        </>
    )
} 