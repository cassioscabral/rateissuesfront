import React from 'react'
import UsersFeed from 'components/molecules/users_feed/UsersFeed'
import ProjectsFeed from 'components/molecules/projects_feed/ProjectsFeed'
import {usersData, projectsFeed} from 'components/organisms/sidebar/SideBarMock'

require('./stylesheets/sidebar.scss')

class Sidebar extends React.Component {
  render () {
    return (
      <div className='sidebar-component'>
        <UsersFeed userActivities={ usersData } />
        <ProjectsFeed projectActivities={ projectsFeed } />
      </div>
    )
  }
}

Sidebar.displayName = 'OrganismSidebar'

export default Sidebar
