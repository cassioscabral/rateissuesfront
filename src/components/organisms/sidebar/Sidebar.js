'use strict';

import React from 'react';
import UsersFeed from 'components/molecules/users_feed/UsersFeed';
import ProjectsFeed from 'components/molecules/projects_feed/ProjectsFeed';

require('./stylesheets/sidebar.scss');

class Sidebar extends React.Component {
  render() {
    var usersData = [
    {
      activity: '@someone upvoted #123 in Rails',
      imageUrl:
        'http://www.gravatar.com/avatar/e426389cb417442835bb1d62273fb53d'
    },
    {
      activity: '@someonelse upvoted #989 in React',
      imageUrl:
        'http://www.gravatar.com/avatar/e426389cb417442835bb1d62273fb53d'
    }
    ];
    var projectsFeed = [
      {
        activity: 'Rails closed an issue'
      },
      {
        activity: 'Meteor is trending'
      }
    ];
    return (
      <div className='sidebar-component'>
        <UsersFeed userActivities={usersData} />
        <ProjectsFeed projectActivities={projectsFeed} />
      </div>
    );
  }
}

Sidebar.displayName = 'OrganismSidebar';

// Uncomment properties you need
// Sidebar.propTypes = {};
// Sidebar.defaultProps = {};

export default Sidebar;
