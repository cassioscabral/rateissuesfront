import React from 'react'

require('./stylesheets/tag.scss')

class Tag extends React.Component {
  render () {
    return (
      <div className='tag-component'>
        { this.props.name }
      </div>
    )
  }
}

Tag.displayName = 'AtomTag'

export default Tag
