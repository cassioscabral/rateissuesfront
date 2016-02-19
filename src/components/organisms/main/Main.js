'use strict';

import React from 'react';
import IssuesList from 'components/molecules/issues_list/IssuesList';
import IssuesTabs from 'components/molecules/issues_tabs/IssuesTabs';
import Settings from 'components/atoms/settings/Settings';

require('./stylesheets/main.scss');

class Main extends React.Component {
  render() {
    return (
      <div className='main-component column'>
        <IssuesTabs/>
        <IssuesList filter-selected='hot'/>
        <Settings />
      </div>
    );
  }
}

Main.displayName = 'OrganismMain';

// Uncomment properties you need
// Main.propTypes = {};
// Main.defaultProps = {};

export default Main;
