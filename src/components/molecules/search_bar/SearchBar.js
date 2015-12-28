'use strict';

import React from 'react';

require('./stylesheets/search_bar.scss');

class SearchBar extends React.Component {
  render() {
    return (
      <div className='search-bar-component'>
        Please edit src/components/molecules/search_bar/SearchBar.js to update this component!
      </div>
    );
  }
}

SearchBar.displayName = 'MoleculeSearchBar';

// Uncomment properties you need
// SearchBar.propTypes = {};
// SearchBar.defaultProps = {};

export default SearchBar;
