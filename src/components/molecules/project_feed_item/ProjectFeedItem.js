import React from 'react'

require('./stylesheets/project_feed_item.scss')

class ProjectFeedItem extends React.Component {
  render () {
    return (
      <div className='project-feed-item-component'>
        { this.props.activity }
      </div>
    )
  }
}

ProjectFeedItem.displayName = 'MoleculeProjectFeedItem'

export default ProjectFeedItem
