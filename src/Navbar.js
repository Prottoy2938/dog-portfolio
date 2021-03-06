import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const dogLinks = this.props.dogs.map(dog => (
      <li className="nav-item" key={dog.name}>
        <NavLink exact className="nav-link" to={`/dogs/${dog.name}`}>
          {dog.name}
        </NavLink>
      </li>
    ));
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/dogs">
          dogs
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          type="button"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
<<<<<<< HEAD
          <ul className="navbar-nav">{dogLinks}</ul>
=======
          <ul className="navbar-nav">
            {dogLinks}
          </ul>
>>>>>>> 70e752d3f4201cc8c7579b35263df53052a3a936
        </div>
      </nav>
    );
  }
}
