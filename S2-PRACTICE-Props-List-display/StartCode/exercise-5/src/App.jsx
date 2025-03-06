// App.js
import React from "react";
import Card from "./components/Card";
import { CARD_DATA } from "./data"; 

function App() {
  return (
    <div className="app">
      <header>
        <h1>Creative Cards App</h1>
        <p>Check out these amazing people and their hobbies!</p>
      </header>
      <main>
        <div className="card-list">
          {CARD_DATA.map((person) => (
            <Card key={person.id} person={person} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;



