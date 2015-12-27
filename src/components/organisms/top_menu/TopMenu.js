'use strict';

import React from 'react';
import LogoName from 'components/molecules/logo_name/LogoName';

require('./stylesheets/top_menu.scss');

class TopMenu extends React.Component {
  render() {
    return (
      <div className='top-menu-component'>
        <LogoName />
      </div>
    );
  }
}

TopMenu.displayName = 'OrganismTopMenu';

// Uncomment properties you need
// TopMenu.propTypes = {};
// TopMenu.defaultProps = {};

export default TopMenu;
