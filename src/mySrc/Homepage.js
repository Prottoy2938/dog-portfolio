import React, { Component } from "react";
import "./Homepage.css";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(dog) {
    console.log("handleClick ran");

    this.props.history.push(`/dogs/${dog}`);
  }
  render() {
    let content = this.props.detailProps.dogs.map((dog, idx) => (
      <div key={idx} className="card">
        <h1>{dog.name}</h1>
        <h2>Age: {dog.age}</h2>
        <img src={dog.src} alt={dog.name} className="rounded-circle" />

        {dog.facts.map((fact, idx1) => (
          <p className="font-weight-italic" key={idx1}>
            {fact}
          </p>
        ))}
        <button
          onClick={() => this.handleClick(dog.name)}
          className="btn btn-default"
        >
          Get more details about {dog.name}
        </button>
      </div>
    ));
    console.log(this.props);

    return (
      <div>
        <h1 className="header">Click On a Dog</h1>
        <div>{content}</div>
      </div>
    );
  }
}
