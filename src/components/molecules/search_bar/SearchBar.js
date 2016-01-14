'use strict';

import React from 'react';
import FontIcon from 'material-ui/lib/font-icon';

require('./stylesheets/search_bar.scss');

class SearchBar extends React.Component {
  render() {
    return (
      <div className='search-bar-component'>
        <FontIcon className='material-icons' color='grey'>search</FontIcon>
        <input type='search' value='search'/>
      </div>
    );
  }
}

SearchBar.displayName = 'MoleculeSearchBar';

// Uncomment properties you need
// SearchBar.propTypes = {};
// SearchBar.defaultProps = {};

export default SearchBar;
