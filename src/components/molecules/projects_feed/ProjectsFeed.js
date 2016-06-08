'use strict'

import React from 'react'
import ProjectFeedItem from
  'components/molecules/project_feed_item/ProjectFeedItem'

require('./stylesheets/projects_feed.scss')

class ProjectsFeed extends React.Component {
  render () {
    var items = this.props.projectActivities
    return (
      <div className='projects-feed-component'>
        { items.map(projectFeedItem =>
          <ProjectFeedItem activity={ projectFeedItem.activity } />)
        }
      </div>
    )
  }
}

ProjectsFeed.displayName = 'MoleculeProjectsFeed'

// Uncomment properties you need
// ProjectsFeed.propTypes = {};
// ProjectsFeed.defaultProps = {};

export default ProjectsFeed
