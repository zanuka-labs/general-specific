import React, { Component } from 'react'
import { connect } from 'react-redux'

class ItemDetail extends Component {
  render() {
    if (!this.props.item) {
      return <div>Select an item to get started.</div>
    }

    return (
        <div>
          <h3>Details for:</h3>
          <div>{this.props.item.title}</div>
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