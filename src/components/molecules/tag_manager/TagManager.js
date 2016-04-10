'use strict'

import React from 'react'
import Tag from 'components/atoms/tag/Tag'

require('./stylesheets/tag_manager.scss')

class TagManager extends React.Component {
  render() {
    return (
      <div className='tag-manager-component'>
        <div className='row padding-box'>
          <h3>{this.props.name}</h3>
        </div>
        <div className='row padding-box'>
          <div className='new-entry'>
            <input type='text'/>
            <button type='submit'>OK</button>
          </div>
          <div className='tags'>
            <Tag name='Javascript'></Tag>
          </div>
        </div>
      </div>
    )
  }
}

TagManager.displayName = 'MoleculeTagManager'

// Uncomment properties you need
// TagManager.propTypes = {};
// TagManager.defaultProps = {};

export default TagManager
