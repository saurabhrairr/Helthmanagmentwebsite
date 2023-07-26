import React, { useState } from "react";
import "./Header.css";
import Dropdown from "./Dropdown";
import About from "./About";
// import ESRD from "./ESRD";
import CKD from "./CKD";
import ESRD from "./ESRD";
import HeartFailure from "./HeartFailure";
import Hypertension from "./Hypertension";
import linkedin from "../component/assest/linkedin.png";
import facebook from "../component/assest/facebook.png";
import call from "../component/assest/call.png";
import printer from "../component/assest/printer.png";
import Diabetes from "./Diabetes";
import removebg from "../component/assest/PNG-removebg-preview.png";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <>
      <div className="header-block">
        <div className="header">
          <span>(502) 506-2639</span>
          <span>(502) 506-2639</span>
        </div>
        <div className="header">
          <a href="https://www.linkedin.com/in/diseasemanagement/">
            <img src={linkedin}></img>
          </a>

          <a href="https://www.facebook.com/Health-Maintenance-Advantage-103679392290505">
            <img src={facebook}></img>
          </a>
        </div>
      </div>

      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        className="justify-content-center"
      >
        <div className="contant">
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="mx-auto">
              <Nav.Link href="/" active>
                Home
              </Nav.Link>
              <Nav.Link href="/About" active>
                About
              </Nav.Link>
              <Nav.Link href="/Progresswork" active>
                How the Program Works
              </Nav.Link>
              <NavDropdown title="Service" active id="basic-nav-dropdown">
                <NavDropdown.Item href="/CKD" active>
                  CKD
                </NavDropdown.Item>
                <NavDropdown.Item href="/ESRD" active>
                  ESRD
                </NavDropdown.Item>
                <NavDropdown.Item href="/Hypertension" active>
                  Hypertension
                </NavDropdown.Item>
                <NavDropdown.Item href="/Diabetes" active>
                  Diabetes
                </NavDropdown.Item>
                <NavDropdown.Item href="/HeartFailure" active>
                  HeartFailure
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Newsandupdate" active>
                News & Update{" "}
              </Nav.Link>
              <Nav.Link href="/ContactUs" active>
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
