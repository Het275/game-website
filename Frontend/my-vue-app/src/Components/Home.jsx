import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Ark1 from "../assets/ark-r3d82hslgyhiw6z1.jpg";
import Ark2 from "../assets/ark.jpg";
import Ark3 from "../assets/wp1958805-ark-survival-evolved-wallpapers.jpg";

const Home = () => {
  return (
    <>
      <div className="carousel-section">
        <Carousel controls indicators>
          <Carousel.Item>
            <img
              style={{ height: "100%" }}
              className="d-block w-100"
              src={Ark1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "100%" }}
              className="d-block w-100"
              src={Ark2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "100%" }}
              className="d-block w-100"
              src={Ark3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Home;
