'use strict'

import React from 'react'

require('./stylesheets/tag.scss')

class Tag extends React.Component {
  render() {
    return (
      <div className='tag-component'>
        {this.props.name}
      </div>
    )
  }
}

Tag.displayName = 'AtomTag'

// Uncomment properties you need
// Tag.propTypes = {};
// Tag.defaultProps = {};

export default Tag
