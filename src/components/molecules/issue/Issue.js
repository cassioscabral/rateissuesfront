'use strict';

import React from 'react';

require('./stylesheets/issue.scss');

class Issue extends React.Component {
  render() {
    var issue = this.props;
    return (
      <div className='issue-component column'>
        <CounterBox numVotes={issue.numVotes} />
        <div className='description'>
          <header>
            <h4>{issue.title}</h4>
          </header>
          <div className='summary'>
            {issue.summary}
          </div>
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
