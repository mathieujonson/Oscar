import React from 'react'
import {connect} from 'react-redux'

class Menu extends React.Component {
  componentDidMount() {
      document.title = 'Menu - Oscar'
  }

  render() {
    //const {currentTodo} = this.props
    return (
      <div>
        Menu coming soon!
      </div>
    )
  }
}

export default connect(
)(Menu)
