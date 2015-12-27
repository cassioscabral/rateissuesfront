'use strict';

import React from 'react';

require('./stylesheets/sidebar.scss');

class Sidebar extends React.Component {
  render() {
    return (
      <div className='sidebar-component'>
        Please edit src/components/organisms/sidebar/Sidebar.js to update this component!
      </div>
    );
  }
}

Sidebar.displayName = 'OrganismSidebar';

// Uncomment properties you need
// Sidebar.propTypes = {};
// Sidebar.defaultProps = {};

export default Sidebar;
