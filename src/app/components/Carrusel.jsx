"use client"
import "./Carrusel.css"
import { useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "1%",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "1%",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  width: "auto",
  height: "80vh",
  backgroundColor: "var(--primary-bg-color)",
  paddingTop: "5%",
  zIndex: "0"
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "var(--primary-bg-color)"
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "2vw",
  transition: "color 0.2s ease, transform 0.2s ease"
};

const dotStyleActive = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "2vw",
    color: "rgb(255,255,255)",
    transform: "scale(1.2)",
    transition: "color 0.2s ease, transform 0.2s ease"
}

export default function Carrusel ({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
    transition: "background 0.5s ease-out"    
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles} className="button">
          <img src="/chevron-thin-left-white.svg"/>
        </div>
        <div onClick={goToNext} style={rightArrowStyles} className="button">
          <img src="/chevron-thin-right-white.svg"/>
        </div>
      </div>
      <div style={slideStylesWidthBackground} id="imagenes"></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={(slideIndex === currentIndex) ? dotStyleActive : dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}            
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};