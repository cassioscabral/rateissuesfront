'use strict';

import React from 'react';

require('./stylesheets/issue.scss');

class Issue extends React.Component {
  render() {
    return (
      <div className='issue-component column'>
        <header>
          <h4>{this.props.title}</h4>
        </header>
        <div className='summary'>
          {this.props.summary}
        </div>
      </div>
    );
  }
}

Issue.displayName = 'MoleculeIssue';

// Uncomment properties you need
// Issue.propTypes = {};
// Issue.defaultProps = {};

export default Issue;
