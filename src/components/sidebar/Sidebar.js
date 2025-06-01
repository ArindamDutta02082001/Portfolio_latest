import React, { Component } from "react";
import "./Sidebar.css";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../images/Arindam.jpg";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h1>
          <Link smooth to="/#start" className="h1_links">
            Arindam Dutta
          </Link>
        </h1>
        <img src={logo} alt=""/>
        <br />
        <br />
        <div
          style={{
            color: "black",
            fontWeight: "700",
            width: "90%",
            margin: "auto",
          }}
          className="tagtop">
          {" "}
          SWE @Bosch Ex-@Amazon @Opentext | 600+ DSA Problems |
          Fullstack Developer | CSE Grad 2023{" "}
        </div>
        <br />
        <div style={{ color: "black", fontWeight: "bold" }} className="">
          {" "}
          # Hello_Good_World{" "}
        </div>
        <div style={{ color: "black", fontWeight: "bold" }} className="">
          {" "}
          # Solve_Real_Problem{" "}
        </div>
        <p
          style={{
            color: "black",
            fontWeight: "bold",
          }}
          className="gmail">
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            rel="noopener noreferrer"
            target="_blank">
            --- Leave a mail ---
          </a>
        </p>

        <ul className="sidebar-nav">
          <li className="sidebar-nav-items">
            <Link smooth to="/#about" className="links">
              About
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link
              smooth
              to="/#education"
              rel="noopener noreferrer"
              className="links">
              Education
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link
              smooth
              to="/#interest"
              rel="noopener noreferrer"
              className="links">
              Interest
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link
              smooth
              to="/#project"
              rel="noopener noreferrer"
              className="links">
              What Do I Know
            </Link>
          </li>
          {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="noopener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
        </ul>

        <div className="flip-card-back">
  <ul className="sidebar-nav">
    <li className="sidebar-nav-icons">
      <a
        href="https://github.com/ArindamDutta02082001"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="GitHub"
        className="fa fas fa-github fa-lg"
      >
        <span className="sr-only">GitHub</span>
      </a>
    </li>
    <li className="sidebar-nav-icons">
      <a
        href="https://www.linkedin.com/in/duttaatwork/"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="LinkedIn"
        className="fa fas fa-linkedin fa-lg"
      >
        <span className="sr-only">LinkedIn</span>
      </a>
    </li>
    <li className="sidebar-nav-icons">
      <a
        href="https://www.instagram.com/arindam_282/"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Instagram"
        className="fa fas fa-instagram fa-lg"
      >
        <span className="sr-only">Instagram</span>
      </a>
    </li>
    <li className="sidebar-nav-icons">
      <a
        href="https://mail.google.com/mail/u/0/#inbox"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Email"
        className="fa fas fa-envelope fa-lg"
      >
        <span className="sr-only">Email</span>
      </a>
    </li>
    <li className="sidebar-nav-icons">
      <a
        href="https://www.facebook.com/profile.php?id=100008298517101"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Facebook"
        className="fa fas fa-facebook fa-lg"
      >
        <span className="sr-only">Facebook</span>
      </a>
    </li>
  </ul>
</div>
      </div>
    );
  }
}

export default Sidebar;
