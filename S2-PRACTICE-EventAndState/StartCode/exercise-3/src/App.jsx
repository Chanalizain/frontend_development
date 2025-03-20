import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [A, setA] = useState("");
  const [B, setB] = useState("");// this mean invalid, empty string, nth is here
  const [result, setResult] = useState(null);// null say it has no value or it stands for 0
  const [error, setError] = useState(false);

  /* You will need some function to handle the key pressed and button events */
  function onA(event){
    setA(Number(event.target.value));
  }
  function onB(event){
    setB(Number(event.target.value));
  }
   // Handle the compute button click
   function handleButtonClick() {
    if (!isNaN(A) && !isNaN(B)) {
      setResult(A + B);
      setError(false);
    } else {
      setResult("Error: A and B must be valid numbers!");
      setError(true);
    }
  }


  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input value={A} onChange={onA} />

      <label>B =</label>
      <input value={B} onChange={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input value={error ? "A and B must be valid numbers!" : result} 
        readOnly 
        style={{  
          color: error ? "red" : "black" 
        }}   disabled />
      <button onClick={handleButtonClick}>Compute</button>
    </main>
  );
}

export default App;
