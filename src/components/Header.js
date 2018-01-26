import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
  <header className="page-header">
      <h1>
          <Link to="/">Oscar</Link>
          <span className="sub-header">Team Stand-Up Tracker</span>
      </h1>
  </header>
)
