import React, { useState, useEffect } from 'react';
import '../../Styles/ImgSlider.css'
import { SliderData } from './SliderData';
import ElementsBanner from './ElementsBanner';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'


const ImgSlider = ({ slides }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const lengthSlide = slides.length;

  const nextSlide = () => {
    setCurrentImg((currentImg === lengthSlide - 1) ? 0 : (currentImg + 1));
  }

  const prevSlide = () => {
    setCurrentImg((currentImg === 0) ? lengthSlide - 1 : (currentImg - 1));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      ((currentImg === (lengthSlide - 1)) ? setCurrentImg(0) : setCurrentImg(currentImg+1));

    }, 5000);
    return () => clearInterval(interval);
  }, [currentImg]);

/*   if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  } */

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      
      {SliderData.map((slide, index) => {
        return (
          <div 
            className={index === currentImg ? 'slide-active' : 'slide'} key={index} 
          >
            {index === currentImg && (
            <img src={slide.image} alt='healthy food' className='image' />
            )}
          <div className={currentImg === 0 ? 'text-button' : 'text-button-hidden'}>
            <ElementsBanner 
              text1='¡Come sano, vive mejor!' 
              text2='Estarás agradecido por ese cambio en tu vida.' 
              button='¡Regístrate!' />
          </div>
          <div className={currentImg === 1 ? 'text-button' : 'text-button-hidden'}>
            <ElementsBanner 
              text1='Brócoli, pepino, lechuga y más...' 
              text2='Agrega más verde a tus platillos.' 
              button='¡Regístrate!' />
          </div>
          <div className={currentImg === 2 ? 'text-button' : 'text-button-hidden'}>
            <ElementsBanner 
              text1='¡Haz el bien, come bien!' 
              text2='Eres lo que comes, así que come correctamente.' 
              button='¡Regístrate!' />
          </div>
          <div className={currentImg === 3 ? 'text-button' : 'text-button-hidden'}>
            <ElementsBanner 
              text1='¡Empieza tu cambio ahora!' 
              text2='Una buena rutina de ejercicios y una alimentación adecuada.' 
              button='¡Regístrate!' />
          </div>
          <div className={currentImg === 4 ? 'text-button' : 'text-button-hidden'}>
            <ElementsBanner 
              text1='¡Las mejores recetas para ti y los tuyos!'
              text2='Sé parte de la comunidad.'
              button='¡Regístrate!' />
          </div>
          <div className={currentImg === (lengthSlide - 1) ? 'text-button' : 'text-button-hidden'}>
            <ElementsBanner 
              text1='¡Una excelente comunidad!' 
              text2='Ingresa y comienza a seguir las mejores recetas para tus platillos.' 
              button='¡Regístrate!' />
          </div>
          </div>
        );
      })}
      
    </section>
  )
}

export default ImgSlider;