import React from "react";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-light bg-white navbar-expand-lg py-2">
        <div class="container-fluid d-flex">
          <a
            class="navbar-brand p-2 flex-grow-1 bd-highlight  ms-5 ps-5"
            href="#"
          >
            <img
              src="https://dont-copy.netlify.app/assets/logo-S2lIhR8K.svg"
              width="170"
              height="30"
              class="d-inline-block align-top"
              alt="Logo"
            />
          </a>
          
          <form class="  collapse navbar-collapse  form-inline  mb-1 ">
            <input
              class="form-control mr-sm-2 w-75 border-0 rounded-pill bg-light"
              type="search"
              placeholder="Search for your favorite groups in ATG"
              aria-label="Search"
            />{" "}
          </form>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

       

          <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav ms-auto me-5">
              <li class="nav-item">
                <a
                  class="nav-link  font-weight-bold fw-bold text-dark"
                  href="#"
                >
                  create Account.
                  <span className="text-primary fw-bold "> It's Free!</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
