import React from 'react'

class NotFound extends React.Component {
  componentDidMount() {
    document.title = '404 - Hangs.me'
  }

  render() {
    return (
      <p>Woah!  I'm not sure what you're looking for, but it ain't here!</p>
    )
  }
}

export default NotFound
