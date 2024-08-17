import "bootstrap/dist/css/bootstrap.min.css";
import "../css/navbar_style.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";


export function NavbarComponent() {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="gradient-bg" sticky="top">
        <Container>
          <Navbar.Brand
            className="me-auto text-navbar"
            onClick={() => handleLinkClick("/")}
            style={{ cursor: "pointer" }}
          >
            Tepary Beans
          </Navbar.Brand>
          <Navbar.Toggle
            className="bg-body-tertiary"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                className="text-navbar"
                onClick={() => handleLinkClick("/funfacts")}
              >
                Fun facts
              </Nav.Link>
              <Nav.Link
                className="text-navbar"
                onClick={() => handleLinkClick("/info")}
              >
                Info about
              </Nav.Link>
             {/*  <Nav.Link
                className="text-navbar"
                onClick={() => handleLinkClick("/about")}
              >
                About our project
              </Nav.Link>
              <Nav.Link
                className="text-navbar"
                onClick={() => handleLinkClick("/tools")}
              >
                Tools
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
