'use strict'

import React from 'react'
import Badge from 'components/atoms/badge/Badge'

require('./stylesheets/badges.scss')

class Badges extends React.Component {
  render() {
    return (
      <div className='badges-component'>
        <label>{ this.props.points }</label>
        <Badge color='gold'
          amount='4' />
        <Badge color='silver'
          amount='15' />
        <Badge color='orange'
          amount='40' />
      </div>
    )
  }
}

Badges.displayName = 'MoleculeBadges'

// Uncomment properties you need
// Badges.propTypes = {};
// Badges.defaultProps = {};

export default Badges
