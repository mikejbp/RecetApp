import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import recetasData from "./recetasData";
//import { api_url } from '../../api.global';
//import axios from 'axios';

//const _api = api_url + "recetas";

function CarrouselContent({ activeIndex }) {

    /*let [recetas, setRecetas] = useState([])

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
    
      useEffect(() => {
        petitionGet();
      }, [])*/

    return (
        <section key={recetasData}>
            {recetasData.map((card, index) => (
            <div
                key={index}
                className={index === activeIndex ? "inactive" : "active"}>
                <img className="carrousel-image" src={card.img} alt=""></img>
                <h2 className="carrousel-title" src={card.nombre}>{card.nombre}</h2>
                <h3 className="carrousel-author" src={card.likes}>Likes: {card.likes}</h3>
                <Link className="button-carrousel" to={`/receta/${card.id}`}>Más detalles</Link>
            </div>
            ))}
        </section>
    );
}

export default CarrouselContent;