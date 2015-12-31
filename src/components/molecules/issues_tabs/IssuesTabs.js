'use strict';

import React from 'react';
import Tab from 'components/atoms/tab/Tab';
require('./stylesheets/issues_tabs.scss');

class IssuesTabs extends React.Component {
  render() {
    var tabs = this.props.tabs;
    return (
      <div className='issues-tabs-component row'>
        {tabs.map(tab => <Tab name={tab} />)}
      </div>
    );
  }
}

IssuesTabs.displayName = 'MoleculeIssuesTabs';

// Uncomment properties you need
// IssuesTabs.propTypes = {};
// IssuesTabs.defaultProps = {};

export default IssuesTabs;
