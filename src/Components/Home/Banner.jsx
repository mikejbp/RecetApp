import React from 'react'
import ImgSlider from './ImgSlider'
import { SliderData } from './SliderData'

const Banner = () => {
  return (
    <ImgSlider slides={SliderData} />
  )
}

export default Banner