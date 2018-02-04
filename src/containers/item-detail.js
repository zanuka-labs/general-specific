import React, { Component } from 'react'
import { connect } from 'react-redux'

class ItemDetail extends Component {
  render() {
    return (
        <div>Item Detail</div>
      )
  }
}

function mapStateToProps(state) {
  return {
    item: state.activeItem
  }
}

export default connect(mapStateToProps)(ItemDetail)