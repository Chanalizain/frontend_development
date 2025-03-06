// Card.js
import React from "react";

export default function Card({ person }) {
  const { name, image, hobbies } = person;

  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h3>{name}</h3>
      <p><strong>Hobbies:</strong> {hobbies.join(", ")}</p>
    </div>
  );
}

