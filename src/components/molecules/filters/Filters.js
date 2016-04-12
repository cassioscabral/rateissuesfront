'use strict'

import React from 'react'
import FontIcon from 'material-ui/lib/font-icon'
import TagManager from 'components/molecules/tag_manager/TagManager'

require('./stylesheets/filters.scss')

class Filters extends React.Component {
  handleClick() {
    if (this.props.onClick) {
      if (this.props.changeComponentTo) {
        this.props.onClick(this.props.changeComponentTo)
      }
    }
  }
  getLanguages() {
    return localStorage.getItem('languages')
  }
  addLanguage(language) {
    languages = localStorage.getItem('languages') || ''
    localStorage.setItem('languages', languages + `+${language}`)
  }
  render() {
    let languageCollection = this.getLanguages().split('+')
    let favoriteProjects = ['Rails', 'React', 'Vue']
    return (
      <div className='filters-component'>
        <div className='row'>
          <h2 className='padding-box'>Filters</h2>
          <FontIcon className='material-icons clickable padding-box'
                    color='#6F1D1D'
                    style={{fontSize: '34px'}}
                    onClick={this.handleClick.bind(this)}>
            close
          </FontIcon>
        </div>
        <TagManager collection='languages'
                    name='Languages'
                    tags={languageCollection}>
        </TagManager>
        <TagManager name='Favorite Projects' tags={favoriteProjects}>
        </TagManager>
      </div>
    )
  }
}

Filters.displayName = 'MoleculeFilters'

// Uncomment properties you need
// Filters.propTypes = {};
// Filters.defaultProps = {};

export default Filters
