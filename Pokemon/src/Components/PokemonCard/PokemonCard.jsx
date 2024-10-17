import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  const { id, name, imageUrl } = pokemon;

  return (
    <div className="pokemon-card">
      <img
        src={imageUrl || "https://via.placeholder.com/96"}
        alt={name}
        className="pokemon-image"
      />
      <div className="pokemon-info">
        <h3 className="name">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
        <p>ID: {id}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
