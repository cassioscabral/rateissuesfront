'use strict';

import React from 'react';

require('./stylesheets/project_feed_item.scss');

class ProjectFeedItem extends React.Component {
  render() {
    return (
      <div className='project-feed-item-component'>
        {this.props.activity}
      </div>
    );
  }
}

ProjectFeedItem.displayName = 'MoleculeProjectFeedItem';

// Uncomment properties you need
// ProjectFeedItem.propTypes = {};
// ProjectFeedItem.defaultProps = {};

export default ProjectFeedItem;
