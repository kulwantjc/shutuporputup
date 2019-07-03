import React from "react"

const SideBar = () => (
  <aside
    id="colorlib-aside"
    role="complementary"
    className="border js-fullheight"
  >
    <div className="text-center">
      <div
        className="author-img"
        style={{ backgroundImage: `url("/images/vipinthree.png")` }}
      ></div>
      <h1 id="colorlib-logo">
        <a href="index.html">Vipin Rawat</a>
      </h1>
      <span className="position">
        <a href="#">Front-end Developer</a> in India
      </span>
    </div>
    <nav id="colorlib-main-menu" role="navigation" className="navbar">
      <div id="navbar" className="collapse">
        <ul>
          <li className="active">
            <a href="#" data-nav-section="home">
              Home
            </a>
          </li>
          <li>
            <a href="#" data-nav-section="about">
              About
            </a>
          </li>
          <li>
            <a href="#" data-nav-section="services">
              Services
            </a>
          </li>
          <li>
            <a href="#" data-nav-section="skills">
              Skills
            </a>
          </li>
          <li>
            <a href="#" data-nav-section="education">
              Education
            </a>
          </li>
          <li>
            <a href="#" data-nav-section="experience">
              Experience
            </a>
          </li>
          <li>
            <a href="#" data-nav-section="work">
              Work
            </a>
          </li>
          <li>
            <a href="#" data-nav-section="blog">
              Blog
            </a>
          </li>
          <li>
            <a href="#" data-nav-section="contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="colorlib-footer">
      <p>
        <small>
          All rights reserved | This template is made with{" "}
          <i className="icon-heart" aria-hidden="true"></i> by{" "}
          <a href="https://colorlib.com" target="_blank">
            Colorlib
          </a>
          <span>
            Demo Images:{" "}
            <a href="https://unsplash.com/" target="_blank">
              Unsplash.com
            </a>
          </span>
        </small>
      </p>
      <ul>
        <li>
          <a href="#">
            <i className="icon-facebook2"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="icon-twitter2"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="icon-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="icon-linkedin2"></i>
          </a>
        </li>
      </ul>
    </div>
  </aside>
)

export default SideBar
