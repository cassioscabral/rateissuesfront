'use strict';

import React from 'react';

require('./stylesheets/project_feed_item.scss');

class ProjectFeedItem extends React.Component {
  render() {
    return (
      <div className='project-feed-item-component'>
        Please edit src/components/molecules/project_feed_item/ProjectFeedItem.js to update this component!
      </div>
    );
  }
}

ProjectFeedItem.displayName = 'MoleculeProjectFeedItem';

// Uncomment properties you need
// ProjectFeedItem.propTypes = {};
// ProjectFeedItem.defaultProps = {};

export default ProjectFeedItem;
