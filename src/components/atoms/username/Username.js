'use strict'

import React from 'react'

require('./stylesheets/username.scss')

class Username extends React.Component {
  render () {
    return (
      <div className='username-component'>
        { this.props.username }
      </div>
    )
  }
}

Username.displayName = 'AtomUsername'

// Uncomment properties you need
// Username.propTypes = {};
// Username.defaultProps = {};

export default Username
