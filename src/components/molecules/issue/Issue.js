'use strict';

import React from 'react';

require('./stylesheets/issue.scss');

class Issue extends React.Component {
  render() {
    return (
      <div className='issue-component'>
        Please edit src/components/molecules/issue/Issue.js to update this component!
      </div>
    );
  }
}

Issue.displayName = 'MoleculeIssue';

// Uncomment properties you need
// Issue.propTypes = {};
// Issue.defaultProps = {};

export default Issue;
