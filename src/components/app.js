import React from "react";
import { Component } from "react";

import ItemList from "../containers/item-list";

export default class App extends Component {
  render() {
    return (
      <div>
        <ItemList />
      </div>
    );
  }
}
