'use strict';

import React from 'react';

require('./stylesheets/top_menu.scss');

class TopMenu extends React.Component {
  render() {
    return (
      <div className='top-menu-component'>
        Please edit src/components/organisms/top_menu/TopMenu.js to update this component!
      </div>
    );
  }
}

TopMenu.displayName = 'OrganismTopMenu';

// Uncomment properties you need
// TopMenu.propTypes = {};
// TopMenu.defaultProps = {};

export default TopMenu;
