import React from 'react'
import {connect} from 'react-redux'

class Meeting extends React.Component {
  componentDidMount() {
      document.title = 'Meeting - Oscar'
  }

  render() {
    return (
      <div>
        Meetings coming soon!
      </div>
    )
  }
}

export default connect(
)(Meeting)
