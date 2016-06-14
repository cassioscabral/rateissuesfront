import React from 'react'
import MdClose from 'react-icons/md/close'
import TagManager from 'components/molecules/tag_manager/TagManager'

require('./stylesheets/filters.scss')

class Filters extends React.Component {
  handleClick () {
    if (this.props.onClick) {
      if (this.props.changeComponentTo) {
        this.props.onClick(this.props.changeComponentTo)
      }
    }
  }
  getLanguages () {
    return localStorage.getItem('languages')
  }
  addLanguage (language) {
    let languages = localStorage.getItem('languages') || ''
    localStorage.setItem('languages', languages + `+${language}`)
  }
  render () {
    let languageCollection = this.getLanguages().split('+')
    let favoriteProjects = ['Rails', 'React', 'Vue']
    return (
      <div className='filters-component'>
        <div className='row'>
          <h2 className='padding-box'>Filters</h2>
          <MdClose
            size='24'
            color='grey'
            onClick={ this.handleClick.bind(this) } />
        </div>
        <TagManager
          collection='languages'
          name='Languages'
          tags={ languageCollection } />
        <TagManager
          name='Favorite Projects'
          tags={ favoriteProjects } />
      </div>
    )
  }
}

Filters.displayName = 'MoleculeFilters'

export default Filters
