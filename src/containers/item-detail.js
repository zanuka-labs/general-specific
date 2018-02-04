import React, { Component } from 'react'
import { connect } from 'react-redux'

class ItemDetail extends Component {
  render() {
    if (!this.props.item) {
      return <div>Select an item to get started.</div>
    }

    return (
        <div>
          <h4>Details:</h4>
          <div>ID: {this.props.item.id}</div>
          <div>TITLE: {this.props.item.title}</div>
        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    item: state.activeItem
  }
}

export default connect(mapStateToProps)(ItemDetail)