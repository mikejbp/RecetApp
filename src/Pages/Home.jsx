import React from 'react';
import Banner from '../Components/Home/Banner';
import Carrousel from '../Components/Carrousel/CarruselRecetas';
import { Link } from 'react-router-dom';
import '../Styles/carrousel.css'

const Home = () => {
  return (
    <>
    <Banner />
    <div className='carrousel'>
    <h1 id="popular" className="popular-categories">Las más votadas</h1>
    <Carrousel />
    <h1 id='celiacos' className="popular-categories">Apto celíacos</h1>
    <Carrousel />
    <h1 id="recents" className="popular-categories">Agregadas recientemente</h1>
    <Carrousel />
    </div>
    <div className='container-button-all-recetas'>
    <Link className="all-recetas-button" to={"/recetas"} >TODAS LAS RECETAS</Link>
    </div>
    </>
  )
}

export default Home;