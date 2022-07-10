import React, { useState, useEffect } from "react";
import CarrouselContent from "./CarrouselContent";
import recetasData from '../Carrousel/recetasData';
import Arrows from "../../Hooks/Arrows";
import "../../Styles/carrousel.css";
import { api_url } from '../../api.global';

//const len = api_url.valueOf - 1;

//const leng = api_url.data
const len = recetasData.length - 1;

function Carrousel(props) {

    //const _api = api_url + "recetas";
    const [activeIndex, setActiveIndex] = useState(4);
    return (
        <div className="carrousel-container">
            <CarrouselContent activeIndex={activeIndex} recetasData={ recetasData }/>
            <Arrows
            prevPhoto={() => 
            setActiveIndex(activeIndex < 4 ? len : activeIndex -1)
            }
            nextPhoto={() => 
            setActiveIndex(activeIndex === len ? 0 : activeIndex +1)
            }
            />
        </div>
    );
}

export default Carrousel;