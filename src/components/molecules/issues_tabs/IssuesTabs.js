'use strict';

import React from 'react';
import Tab from 'components/atoms/tab/Tab';
require('./stylesheets/issues_tabs.scss');

class IssuesTabs extends React.Component {
  render() {
    return (
      <div className='issues-tabs-component'>
        <header>
          <h4>Hot Issues</h4>
        </header>
        <div className='row tabs'>
          <Tab name='hot' active='active'/>
          <Tab name='trending' />
          <Tab name='fresh' />
        </div>
      </div>
    );
  }
}

IssuesTabs.displayName = 'MoleculeIssuesTabs';

// Uncomment properties you need
// IssuesTabs.propTypes = {};
IssuesTabs.defaultProps = {activeTab: 'hot'};

export default IssuesTabs;
