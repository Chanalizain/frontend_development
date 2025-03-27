import { useState } from "react";
export default function StuffForm({onAddStuff}) {
  const [name, setName] = useState(""); // Store the entered name
  const [price, setPrice] = useState(""); // Store the entered price

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !price.trim()) return; // Prevent adding empty items

    onAddStuff(name, price); // Send data to App component
    setName(""); // Clear input after submission
    setPrice("");
  };
  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input type="text" placeholder="Banana" value={name} onChange={handleNameChange}/>

      <p>Stuff price</p>
      <input type="number" placeholder="15" value={price} onChange={handlePriceChange} />

      <button type="submit">Add Stuff</button>
    </form>
  );
}
