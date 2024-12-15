import React from "react";
import pic from "./Images/pic.jpg";

function Homepage() {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide mt-0" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active position-relative" style={{ height: "500px" }}>
            <img
              className="d-block w-100"
              src={pic}
              alt="First slide"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
            <div className="position-absolute bottom-0 start-0 text-white p-3" style={{ fontSize: "2rem", fontWeight: "bold" }}>
              Computer Science
              <div className="mt-2" style={{ fontSize: "1rem", fontWeight: "normal" }}>
                142,765 Computer Engineers follow this
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
