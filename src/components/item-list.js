import React, { Component } from 'react';

export default class ItemLIst extends Component {
  renderList() {
    return this.props.items.map((item) => {
      return (
        <li key={item.title} className="list-group-item">{item.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group" col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}
