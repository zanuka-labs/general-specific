import React, { Component } from 'react'

export default class ItemList extends Componet {
  renderList() {
    return this.props.items.map((book) => {
      return (
          <li key={item.title} className="list-group-item">{item.title}</li>
        )
    })
  }

  render() {
    return (
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>         
      )
  }
}