import React, { Component } from 'react'
import { connect } from 'react-redux'

class ItemList extends Component {
  renderList() {
    return this.props.items.map(item => {
      return (
          <li 
            key={item.title} 
            className="list-group-item"
          >
            {item.title}
          </li>
        )
    })
  }

  render() {
    console.log(this.props.items)
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>         
    ) 
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of ItemList
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(ItemList)