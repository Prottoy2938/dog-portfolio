import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import Navbar from "./Navbar";
// import Homepage from "./Homepage";
// import Navbar from "./Navbar";
// import Redirector from "./Redirector";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src:
          "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src:
          "https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src:
          "https://images.pexels.com/photos/69372/pexels-photo-69372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  };
  render() {
    console.log("Dog icon icon by Icons8");

    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );

      return <DogDetails {...props} dog={currentDog} />;
    };

    return (
      <div>
        <Navbar dogs={this.props.dogs} />
        <Switch>
          <Route
            exact
            path="/dog-portfolio"
            render={() => <DogList dogs={this.props.dogs} />}
          />
          <Route
            exact
            path="/dogs"
            render={() => <DogList dogs={this.props.dogs} />}
          />
          <Route
            exact
            path="/"
            render={() => <DogList dogs={this.props.dogs} />}
          />
          <Route exact path="/dogs/:name" component={getDog} />} />
          <Route
            exact
            path="/"
            render={() => <DogList dogs={this.props.dogs} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
