'use strict'

import React from 'react'
import MdSearch from 'react-icons/md/search'

require('./stylesheets/search_bar.scss')

class SearchBar extends React.Component {
  render () {
    return (
      <div className='search-bar-component'>
        <MdSearch
          size='24'
          color='grey' />
        <input type='search' />
      </div>
    )
  }
}

SearchBar.displayName = 'MoleculeSearchBar'

// Uncomment properties you need
// SearchBar.propTypes = {};
// SearchBar.defaultProps = {};

export default SearchBar
