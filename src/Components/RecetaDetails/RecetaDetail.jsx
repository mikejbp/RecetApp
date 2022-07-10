import React from 'react';
import { useParams } from 'react-router-dom';
import recetasData from '../Carrousel/recetasData';
import '../../Styles/recetaDetail.css'

function RecetaDetail() {
    const { recetaId } = useParams()
    const thisReceta = recetasData.find(receta => receta.id === Number(recetaId))

    return (
        <section className='section-receta'>
            <div className='first-part-of-the-recipe'>
                <div className='receta-detail-content'>
                    <img className="receta-detail-image"
                        alt="detalle-receta"
                        src={thisReceta.img}></img>
                    <div className='receta-more-detail'>
                        <h1 className='receta-title'>{thisReceta.title}</h1>
                        <h3 className='items-receta'>Ingredientes: </h3>{thisReceta.ingredients}
                        <h3 className='items-receta'>Author: </h3>{thisReceta.author}
                        <h3 className='items-receta'>Profesion: Chef</h3>
                    </div>
                </div>
                <div className='receta-description'>
                    <h1 className='receta-title'>DESCRIPTION</h1>
                    <p className='items-receta'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda aut sequi nam, impedit cum qui atque obcaecati quidem saepe consequatur.</p>
                    <h1 className='receta-title'>Otro Item</h1>
                    <p className='items-receta'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis incidunt, laborum numquam itaque ipsa qui odio iste minima voluptates tempora autem aut illum reiciendis labore ex, at tempore dolores vitae.
                    </p>
                </div>
            </div>
            <div className='second-part-of-the-recipe'>
                <div className='nutritional-components'>
                    <h1 className='receta-title'>CALORIES INFORMATION</h1>
                </div>
                <div className='calories'>
                    <h1 className='receta-title'>NUTRITIONAL INFORMATION</h1>
                    <p className='items-receta'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda aut sequi nam, impedit cum qui atque obcaecati quidem saepe consequatur.
                        officiis commodi, enim porro quod laudantium illum sint harum aspernatur.</p>
                </div>
            </div>
        </section>
    )
}

export default RecetaDetail