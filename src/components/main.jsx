import React from "react";

const Home = () => {
  return (
    <>
      <div
        className="hero border-1 pb-3"
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
        }}
      >
        <div
          className="card bg-dark text-white border-0 mx-3"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <img
            className="card-img img-fluid.max-width:100%"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(100%)",
            }}
          />
          <div
            className="card-img-overlay d-flex align-items-center"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              padding: "3rem",
              boxSizing: "border-box",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="container text-container">
              <h1 className="card-title fs-1 text fw-bold" style={{ color: "white" }}>
                SPECIAL OFFERS INCOMING
              </h1>
              <p className="card-text fs-1  d-none d-sm-block" style={{ color: "yellow" }}>
                <em>New offers for special occations and celebrations.</em>
              </p>
              <p className="card-text fs-1 d-none d-sm-block" style={{ color: "white" }}>
                <em>Unleash your inner chef with Amaris Cutlery.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;