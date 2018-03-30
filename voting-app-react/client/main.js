import React, { Component } from "react";
import { View, Text } from "react-native";

import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

class App extends Component {
  render() {
    return <h2>Hello from App</h2>;
  }
}

Meteor.startup(() => {
  render(<App />, document.getElementById("render-target"));
});
