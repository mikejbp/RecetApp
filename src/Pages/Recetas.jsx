import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recetasData from "../Components/Carrousel/recetasData";
import '../Styles/recetas.css'
//import { api_url } from '../api.global';
//import axios from 'axios';

const Recetas = () => {

  const recetas = recetasData;
  /*let [recetas, setRecetas] = useState([])
  const _api = api_url + "recetas";

  const petitionGet = async () => {
    const headers = {
      'Content-Type': 'application/json'
    }
    await axios.get(_api, {headers})
      .then(response => {
        setRecetas(response.data)
      }).catch(error => {
        console.log(error)
      })
  }

  const handleChange = e => {
    setRecetas(e.target.value)
  }

  useEffect(() => {
    petitionGet();
  }, [])*/

  return (
    <section key={recetas} className="all-recetas-container">
      <h1 className='recetas-title'>TODAS LAS RECETAS</h1>
      <aside className='grid-recetas'>
        {recetas.map((card, index) => (
        <div className='section-recetas'>
        <div
          key={index}
          className="receta-data-card">
          <img className="receta-card-image" src={card.img} alt=""></img>
          <h2 className="receta-card-title" src={card.title}>{card.title}</h2>
          <h3 className="receta-card-author" src={card.author}>Por: {card.author}</h3>
          <Link className="button-receta-card" to={`/receta/${card.id}`}>Más detalles</Link>
        </div>
        </div>
      ))}
      </aside>
      
    </section>
  )
}
export default Recetas;