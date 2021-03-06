import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.history.push("/dogs");
  }

  render() {
    const logoStyle = {
      justifyContent: "space-around"
    };
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={logoStyle}
        >
          {this.props.pathDetails.dogs.map((dog, idx) => (
            <NavLink
              key={idx}
              className="nav-link"
              activeClassName="nav-link active"
              to={`/dogs/${dog.name}`}
            >
              {dog.name}
            </NavLink>
          ))}
        </nav>
      </div>
    );
  }
}
export default withRouter(Navbar);
