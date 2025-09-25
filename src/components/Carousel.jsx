import React, { useState, useEffect } from "react";
import "../styles/Carousel.css";

const Carousel = ({ slides, id = "header-carousel" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-advance slides
  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides]);
  
  if (!slides || slides.length === 0) {
    return (
      <div style={{ backgroundColor: 'red', minHeight: '100vh', padding: '20px', color: 'white' }}>
        <h1>ERROR: No slides provided to carousel</h1>
        <p>Slides data: {JSON.stringify(slides)}</p>
      </div>
    );
  }
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  return (
    <div className="carousel-container">
      <div id={id} className="carousel-wrapper">
        {/* Slide Container */}
        <div className="carousel-slides">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`carousel-item ${idx === currentSlide ? 'active' : 'hidden'}`}
            >
              <img
                src={slide.img}
                alt={slide.alt}
                className="carousel-img"
              />

              <div className="carousel-overlay">
                <div className="carousel-content-wrapper">
                  <div className="carousel-content-container">
                    <div className="carousel-content">
                      <h1 className={`carousel-title ${idx === currentSlide ? 'animate' : ''}`}>
                        {slide.title}
                      </h1>
                      <p className={`carousel-description ${idx === currentSlide ? 'animate' : ''}`}>
                        {slide.desc}
                      </p>
                      {slide.buttonLink && slide.buttonText && (
                        <a
                          href={slide.buttonLink}
                          className={`carousel-button ${idx === currentSlide ? 'animate' : ''}`}
                        >
                          {slide.buttonText}
                          <div className="carousel-button-icon">
                          <i class="fa fa-arrow-right"></i>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls - Only show if more than 1 slide */}
        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              className="carousel-control carousel-control-prev"
            >
              <span className="carousel-control-icon">‹</span>
              <span className="carousel-control-text">Previous</span>
            </button>
            
            <button
              type="button"
              onClick={nextSlide}
              className="carousel-control carousel-control-next"
            >
              <span className="carousel-control-icon">›</span>
              <span className="carousel-control-text">Next</span>
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default Carousel;