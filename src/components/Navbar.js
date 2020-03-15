import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

import "../css/navbar.css";

class MyNavbar extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="gray" expand="lg" className="sticky-top mynavbar">
        <div className="container">
          <Navbar.Brand href="/">
            <img src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link to="/" className="mx-4">
                Home
              </Link>
              <Link to="/rooms" className="mx-4">
                Rooms
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default MyNavbar;
