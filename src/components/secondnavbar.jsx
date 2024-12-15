import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function SecondaryNavbar() {
  return (
    <div className="container">
      {/* Navbar */}
      
      <nav className="navbar navbar-expand-lg navbar-white  bg-white d-flex justify-content-between border-bottom mb-3">
        <a className="navbar-brand fst-italic" href="#" style={{ textDecoration: "underline", textUnderlineOffset: "10px" }}>
          All Posts(32)
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Article <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Event</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Job</a>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-secondary me-2">Write Post</button>
          <button type="button" className="btn btn-primary">Join Group <i className="bi bi-people-fill"></i></button>
        </div>
      </nav>


    </div>

  );
}

export default SecondaryNavbar;
