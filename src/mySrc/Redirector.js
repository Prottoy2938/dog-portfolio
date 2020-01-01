import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export default class Redirector extends Component {
  render() {
    return (
      <div>
        <Redirect to="/dogs" />
      </div>
    );
  }
}
