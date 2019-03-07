import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

export class MapFooter extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" variant="light" bg="light" />
        <Navbar.Brand href="#">Look around for tasks to do!</Navbar.Brand>
      </div>
    );
  }
}

export default MapFooter;
