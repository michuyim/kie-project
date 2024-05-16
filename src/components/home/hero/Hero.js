import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import './Hero.css';

export const Hero = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <div
      id="hero"
      className="mt-5 p-sm-5 align-items-center"
      style={{backgroundImage: "url('/hero.png')"}}
    >
      <Container fluid="md" className="m-auto p-5">
        <div className="bg-dark bg-opacity-50 card container">
          <div className="align-items-md-stretch m-2">
            <>
              <div
                className="card-title position-relative"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <h1 className="fs-1 pt-1 fw-bold">
                  <span className="text-danger fw-bold">{title.part1}</span>
                  <br />
                  <span className="text-primary">{title.part2}</span>
                </h1>
                <p className="card-info text-light  fs-5">{subtitle}</p>
              
                <hr />
              </div>
              <div className="card-body">
                <h4 className="col-12 col-lg-6 mb-2 text-start  text-light">
                  Whether you're dreaming of exploring the vibrant culture of
                  South Korea, pursuing career opportunities, or seeking an
                  educational adventure, we are here to make your journey smooth
                  and successful.
                </h4>
</div><hr />
                <Button
                  href={buttonLink}
                  variant="danger"
                  className="mt-3 mb-3 text-white btn btn-md"
                >
                  {buttonText}
                </Button>
              
            </>
          </div>
        </div>
      </Container>
    </div>
  );
};

