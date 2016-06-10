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

export default Username
