import './App.css'
import React,{ useState } from "react";

function App(){
// making state of our application


  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [BMI, setBMI] = useState('');
  const [message, setMessage] = useState('');


  //logic

 let calcBMI = (e) => {
  e.preventDefault();
  if (weight === 0 || height === 0) {
    alert('Please enter valid weight and height');
  } else {
    let bmi = (weight / (height * height)) * 703;
    setBMI(bmi.toFixed(1));

    if (bmi < 18.5) {
      setMessage('You are underweight');
    } else if (bmi >= 18.5 && bmi < 25) {
      setMessage('You are at a healthy weight');
    } else if (bmi >= 25 && bmi < 30) {
      setMessage('You are overweight');
    } else {
      setMessage('You are obese');
    }
  }
};

  //reload 

  let reload = () =>{
    window.location.reload()
  }
   

  return <div className="App">

    <div className="container">
      <h2>BMI calculator</h2>

      <form onSubmit={calcBMI}>

        <div>
          <label>Weight(lbs)</label>
          <input type="text" placeholder="Please enter your weight" value={weight} onChange={(e) => setWeight(e.target.value)}></input>
        </div>
        
        <div>
          <label>Height</label>
          <input type="text" placeholder="Please enter your height" value={height} onChange={(e) => setHeight(e.target.value)}></input>
        </div>

        <div>
          <button className="btn" type="submit">Submit</button>
          <button className="btn btn-outlins" onClick={reload} type="button" >Reload</button>
        </div>

        <div className='center'>
          <h3>your BMI is: {BMI}</h3>
          <p>{message}</p>

        </div>

      </form>
    </div>
  </div>
}
export default App;