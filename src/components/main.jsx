import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid.max-width:100%"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container text-container">
              <h1 className="card-title fs-1 text fw-bold">SPECIAL OFFERS INCOMING</h1>
              <p className="card-text fs-1 fw-bold d-none d-sm-block">
                NEW OFFERS FOR SPECIAL OCCATIONS AND CELEBRATIONS.
              </p>
              <p className="card-text fs-1 fw-bold d-none d-sm-block" >UNLEASH YOUR INNER CHEF WITH AMARIS CUTLERY.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;