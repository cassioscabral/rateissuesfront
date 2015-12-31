'use strict';

import React from 'react';

require('./stylesheets/issues_list.scss');

class IssuesList extends React.Component {
  render() {
    return (
      <div className='issues-list-component'>
        Please edit src/components/molecules/issues_list/IssuesList.js to update this component!
      </div>
    );
  }
}

IssuesList.displayName = 'MoleculeIssuesList';

// Uncomment properties you need
// IssuesList.propTypes = {};
// IssuesList.defaultProps = {};

export default IssuesList;
