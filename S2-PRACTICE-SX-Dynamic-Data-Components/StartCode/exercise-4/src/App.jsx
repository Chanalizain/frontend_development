import React from "react";

function App() {
  /* Contants used in this component */
  const DOLLAR_TO_EURO_RATIO = 0.92;
  const DOLLAR_TO_DONG_RATIO = 24560;

  let valueDollars = 15;

  // TODO : You need to implement and call this function in your JSX code
  // Convert the given value in dollars to a value in euro
  function dollarToEuro(valueInDollars) { return valueInDollars * DOLLAR_TO_EURO_RATIO; }

  // TODO : You need to implement and call this function in your JSX code
  // Convert the given value in dollars to a value in dong
  function dollarToDong(valueInDollars) {return valueInDollars * DOLLAR_TO_DONG_RATIO; }

  // Calculate and return the values in euro and dong
  const valueInEuro = dollarToEuro(valueDollars);
  const valueInDong = dollarToDong(valueDollars);

  return (
    <main>
      <h1>Device conversions</h1>

      <p>
        <label>Current value in dollars</label>
        <input disabled value={valueDollars} />

        {/* TODO This input need to display the value in dongs */}
        <label>Value in Dong={valueInDong}</label>
        <input disabled value={valueInDong.toLocaleString()} />

        {/* TODO This input need to display the value in euros */}
        <label>Value in Euro={valueInDong}</label>
        <input disabled value={valueInEuro.toFixed(2)} />
      </p>
    </main>
  );
}

export default App;
