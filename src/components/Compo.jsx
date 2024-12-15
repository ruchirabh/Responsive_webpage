import React from "react";
import { Button, Image } from "react-bootstrap"; // Ensure Image and Button components are correctly imported
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure Bootstrap Icons are properly imported

function Compo() {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center">
        <div className="row w-100">
          <div className="col-12 col-md-8">
            {" "}
            {/* Full width on mobile, fixed width on larger screens */}
            {/* First Card */}
            <div className="card w-100 mb-2">
              <img
                className="card-img-top img-fluid"
                src="https://cdn.britannica.com/95/136995-050-6209F94F/rainforest-Malaysia.jpg"
                alt="Card image cap"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h1>
                  <i className="bi bi-journal">
                    <span className="card-title fw-bold">Article</span>
                  </i>
                </h1>
                <h3 className="card-text" style={{ fontStyle: "italic" }}>
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </h3>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  I’ve worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link me-5 pe-5">
                  Card link
                </a>
                <a href="#" className="card-link ms-5 ps-5">
                  Another link
                </a>
              </div>
            </div>
            {/* Second Card */}
            <div className="card w-100 mb-2">
              <img
                className="card-img-top img-fluid"
                src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct-v3/education.jpg"
                alt="Card image cap"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body mb-2">
                <h1>
                  <i className="bi bi-book">
                    <span className="card-title fw-bold">Education</span>
                  </i>
                </h1>
                <h3 className="card-text" style={{ fontStyle: "italic" }}>
                  Tax Benefits for Investment under National Pension Scheme
                  launched by Government
                </h3>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor….
                </li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link me-5 pe-5">
                  Card link
                </a>
                <a href="#" className="card-link ms-5 ps-5">
                  Another link
                </a>
              </div>
            </div>
            {/* Third Card */}
            <div className="card w-100 mb-2">
              <img
                className="card-img-top img-fluid"
                src="https://technovans.com/wp-content/uploads/2019/05/top-12-blogging-tips-for-beginners.jpg"
                alt="Card image cap"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h1>
                  <i className="bi bi-journal">
                    <span className="card-title fw-bold">Blog</span>
                  </i>
                </h1>
                <h3 className="card-text" style={{ fontStyle: "italic" }}>
                  Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                  augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                </h3>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  I’ve worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link me-5 pe-5">
                  Card link
                </a>
                <a href="#" className="card-link ms-5 ps-5">
                  Another link
                </a>
              </div>
            </div>
            {/* Fourth Card */}
            <div className="card w-100 mb-2">
              <img
                className="card-img-top img-fluid"
                src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=1536,quality=75,format=auto/AI_Video_afddb25c03/AI_Video_afddb25c03.png"
                alt="Card image cap"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h1>
                  <i className="bi bi-play-btn">
                    <span className="card-title fw-bold">Video</span>
                  </i>
                </h1>
                <h3 className="card-text" style={{ fontStyle: "italic" }}>
                  blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas
                  nec odio et ante tincidunt tempus
                </h3>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  I’ve worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link me-5 pe-5">
                  Card link
                </a>
                <a href="#" className="card-link ms-5 ps-5">
                  Another link
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar with Input and Recommended Groups */}
          <div className="col-md-4 d-flex justify-content-center ps-5">
            <div
              className="card bg-white border-none"
              style={{ border: "none" }}
            >
              <div className="input-group w-100 mt-2">
                <span className="input-group-text">
                  <i className="bi bi-geo-alt-fill"></i>{" "}
                  {/* Icon for the input */}
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your location"
                />
              </div>
              <div className="d-flex align-items-center ">
              <p className="mt-5 ms-1">
            
                <i className="bi bi-hand-thumbs-up"></i> Recommended Groups:
              </p>
              </div>

              {/* Example of Recommended Group with Image and Button */}
              <div className="d-flex align-items-center mb-2">
                <Image
                  src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                  roundedCircle
                  width="40"
                  height="40"
                  className="me-3"
                />
                <span className="fw-bold">Leisure</span>
                <div className="ms-auto">
                  <Button variant="outline-primary" className="ms-3">
                    Follow
                  </Button>
                </div>
              </div>
              <div className="d-flex align-items-center mb-2">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
                  roundedCircle
                  width="40"
                  height="40"
                  className="me-3"
                />
                <span className="fw-bold">Thomas</span>
                <div className="ms-auto">
                  <Button variant="outline-primary" className="ms-3">
                    Follow
                  </Button>
                </div>
              </div>
              <div className="d-flex align-items-center mb-2">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                  roundedCircle
                  width="40"
                  height="40"
                  className="me-3"
                />
                <span className="fw-bold">Arjun</span>
                <div className="ms-auto">
                  <Button variant="outline-primary" className="ms-3">
                    Follow
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compo;
