import React from "react";
import recetasData from "../Carrousel/recetasData";
import { Link } from "react-router-dom";

const recetas = () => {

  const recetas = recetasData.map(receta => {
    return (
      <div key={receta.id}>
        <h3>
          <Link to={`/receta/${receta.id}`}></Link>
        </h3>
        <p>Ingredients: ${receta.ingredients}</p>
        <hr />
      </div>
    );
  });

  return (
    <>
      <h1>Recetas Page</h1>
      {recetas}
    </>
  );
};

export default recetas;