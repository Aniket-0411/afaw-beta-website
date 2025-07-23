import React from "react";

const Carousel = ({ slides, id = "header-carousel" }) => (
  <div className="container-fluid p-0 mb-5">
    <div id={id} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {slides.map((slide, idx) => (
          <div
            className={`carousel-item${idx === 0 ? " active" : ""}`}
            key={idx}
          >
            <img
              className="w-100 carousel-img"
              src={slide.img}
              alt={slide.alt}
              style={{ height: "1000px", objectFit: "cover", objectPosition: "center" }}
            />
      {/* Responsive image height for carousel */}
      <style>
        {`
          @media (max-width: 767.98px) {
            .carousel-img {
              height: 450px !important;
            }
          }
        `}
      </style>
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-7 pt-5">
                    <h1 className="display-4 text-white mb-3 animated slideInDown">
                      {slide.title}
                    </h1>
                    <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                      {slide.desc}
                    </p>
                    <a
                      className="btn btn-primary py-2 px-3 animated slideInDown"
                      href={slide.buttonLink}
                    >
                      {slide.buttonText}
                      <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
);

export default Carousel;
