import React, { Component } from "react";
import "./DogDetails.css";
import { Link } from "react-router-dom";

export default class DogDetails extends Component {
  render() {
    let { dog } = this.props;

    return (
      <div className="container">
        <div className="DogDetails row justify-content-center mt-5">
          <div className="col-12 col-lg-8">
            <div className="DogDetails-card card d-flex justify-content-center">
              <img src={dog.src} alt={dog.name} className="card-img-top" />
              <div className="card-body">
                <h2 className="card-title">{dog.name}</h2>
                <h4 className="card-subtitle text-muted">
                  {dog.age} years old
                </h4>
              </div>
              <ul className="list-group list-group-flush">
                {dog.facts.map((fact, idx) => (
                  <li className="list-group-item" key={idx}>
                    {fact}
                  </li>
                ))}
              </ul>
              <div className="card-body">
                <Link to="/dogs" className="btn btn-info">
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
