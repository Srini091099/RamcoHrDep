import React, { useState } from 'react';
import '../Style/Slider.css';
import Slider1 from '../asset/Slider1.png';
import Slider2 from '../asset/Slider2.png';
import Slider3 from '../asset/Slider3.png';

const images = [
  Slider1,
  Slider2,
  Slider3,
  
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  const prevSlide = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>{'<'}</button>
      <img className="image" src={images[currentImageIndex]} alt="Slider" />
      <button className="next" onClick={nextSlide}>{'>'}</button>
    </div>
  );
};

export default Slider;
