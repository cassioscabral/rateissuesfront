'use strict'

import React from 'react'
import Tag from 'components/atoms/tag/Tag'

require('./stylesheets/tag_manager.scss')

class TagManager extends React.Component {
  addTag() {
    console.log('add tag')
  }
  render() {
    return (
      <div className='tag-manager-component u-margin-top-2'>
        <div className='row padding-box'>
          <h3>{this.props.name}</h3>
        </div>
        <div className='row padding-box'>
          <div className='new-entry'>
            <input type='text'/>
            <button onClick={this.addTag.bind(this)} type='submit'>OK</button>
          </div>
          <div className='tags'>
            {this.props.tags.map((tag) => <Tag name={tag}></Tag>)}
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
