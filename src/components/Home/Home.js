import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
  componentDidMount() {
      document.title = 'Oscar - Team Stand-Up Tracker'
  }

  render() {
    return (
      <div>
        Oscar coming soon!
      </div>
    )
  }
}

export default connect(
)(Home)
