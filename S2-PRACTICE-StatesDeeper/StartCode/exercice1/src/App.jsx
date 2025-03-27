import React from "react";
import { useState } from "react";

export default function App() {
    const [score, setScore] = useState(0); // Initialize state

    const handleChange = (event) => {
      let value = parseInt(event.target.value, 10);
      if (isNaN(value)) value = 0; // Handle empty input
      if (value > 10) value = 10; // Ensure max limit
      if (value < 0) value = 0; // Ensure min limit
      setScore(value);
  };

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${(score / 10) * 100}%`; // Convert score to percentage

    // 2- Compute color (optional)
    const scoreColor = score >= 7 ? "#4CAF50" : score >= 4 ? "#f3bc47" : "#FF5733"; // Green, Yellow, Red based on score

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
      height: "100%",
      transition: "width 0.3s ease-in-out", // Smooth animation
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={score} onChange={handleChange}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
