import React from 'react'
import Tag from 'components/atoms/tag/Tag'

require('./stylesheets/tag_manager.scss')

class TagManager extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tagValue: 'test',
      tags: this.props.tags
    }
  }
  getTags () {
    return this.state.tags
  }
  // tags are array saved as strings separated by '+'
  addTag () {
    // TODO deal with cases like C++
    let tag = this.state.tagValue
    let collectionName = this.props.collection
    let tags = localStorage.getItem(collectionName) || ''
    console.log(tag, collectionName, tags)
    localStorage.setItem(collectionName, tags + `+${tag}`)

    // deal with the array
    // let oldTags = this.getTags()
    // oldTags.push(tag)
    // this.setState({tags: oldTags})
  }
  handleInput (event) {
    this.setState({tagValue: event.target.value})
  }
  render () {
    return (
      <div className='tag-manager-component u-margin-top-2'>
        <div className='row padding-box'>
          <h3>{ this.props.name }</h3>
        </div>
        <div className='row padding-box'>
          <div className='new-entry'>
            <input
              type='text'
              value={ this.state.tagValue }
              onChange={ this.handleInput.bind(this) }
            />
            <button
              onClick={ this.addTag.bind(this) }
              type='submit'>OK</button>
          </div>
          <div className='tags'>
            { this.props.tags.map((tag) => <Tag name={ tag }></Tag>) }
          </div>
        </div>
      </div>
    )
  }
}

TagManager.displayName = 'MoleculeTagManager'

export default TagManager
