import React, { useState, useEffect } from "react";
import Slide1 from "../../image/small1.jpg";
import Slide2 from "../../image/small2.webp";
import Slide3 from "../../image/small6.avif";
import Slide4 from "../../image/small7.jpg";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="carousel1">
      <div className="container">

        <div className="row">

          <div className="col" id="sm-caro">
          <p className="fs-3 mr-5"> Order now and embark on a flavorful journey with us!<br/> Experience.</p>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div
                  className={`carousel-item ${
                    activeIndex === 0 ? "active" : ""
                  }`}
                >
                  <div className="position-relative">
                    <div className="offer-overlay">
                      <p className="offer">Offer: 10% off</p>
                    </div>
                    <img
                      src={Slide1}
                      className="d-block"
                      alt="Slide 1"
                      id="image"
                      style={{ width: "45vw", height: "50vh" }}
                    />
                  </div>
                </div>

                <div
                  className={`carousel-item ${
                    activeIndex === 1 ? "active" : ""
                  }`}
                >
                  <div className="position-relative">
                    <div className="offer-overlay">
                      <p className="offer">Offer: 10% off</p>
                    </div>
                    <img
                      src={Slide2}
                      className="d-block"
                      alt="Slide 2"
                      id="image"
                      style={{ width: "45vw", height: "50vh" }}
                    />
                  </div>
                </div>
                <div
                  className={`carousel-item ${
                    activeIndex === 2 ? "active" : ""
                  }`}
                >
                  <div className="position-relative">
                    <div className="offer-overlay">
                      <p className="offer">Offer: 15% off</p>
                    </div>
                    <img
                      src={Slide3}
                      className="d-block "
                      alt="Slide 3"
                      id="image"
                      style={{ width: "45vw", height: "50vh" }}
                    />
                  </div>
                </div>
                <div
                  className={`carousel-item ${
                    activeIndex === 3 ? "active" : ""
                  }`}
                >
                  <div className="offer-overlay">
                    <p className="offer">Offer: 20% off</p>
                  </div>
                  <div className="position-relative">
                    <img
                      src={Slide4}
                      className="d-block "
                      alt="Slide 4"
                      id="image"
                      style={{ width: "45vw", height: "50vh" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
