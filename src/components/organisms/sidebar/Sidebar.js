'use strict';

import React from 'react';
import Feed from 'components/molecules/feed/Feed';
import UsersFeed from 'components/molecules/users_feed/UsersFeed';
import ProjectsFeed from 'components/molecules/projects_feed/ProjectsFeed';

require('./stylesheets/sidebar.scss');

class Sidebar extends React.Component {
  render() {
    return (
      <div className='sidebar-component'>
        <UsersFeed />
        <ProjectsFeed />
      </div>
    );
  }
}

Sidebar.displayName = 'OrganismSidebar';

// Uncomment properties you need
// Sidebar.propTypes = {};
// Sidebar.defaultProps = {};

export default Sidebar;
