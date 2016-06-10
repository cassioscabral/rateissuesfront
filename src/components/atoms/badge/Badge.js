import React from 'react'

require('./stylesheets/badge.scss')

class Badge extends React.Component {
  render () {
    return (
      <div className='badge-component'>
        <span
          className='round-badge'
          style={ {'backgroundColor': this.props.color} } />
        <label>{ this.props.amount }</label>
      </div>
    )
  }
}

Badge.displayName = 'AtomBadge'

export default Badge
