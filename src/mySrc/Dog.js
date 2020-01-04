import React, { Component } from "react";

export default class Dog extends Component {
  render() {
    const dogName = this.props.match.params.dogname;

    const findDog = this.props.findDogDetails.dogs.filter(
      dogDetails => dogDetails.name === dogName
    );
    let dog = findDog[0];

    return (
      <div>
        <h1>This is {dog.name}</h1>
        <h2>His age is {dog.age}</h2>
        <img src={dog.src} alt={dog.name} className="rounded-circle" />
        {dog.facts.map((fact, idx) => (
          <li className="font-weight-italic" key={idx}>
            {fact}
          </li>
        ))}
      </div>
    );
  }
}
