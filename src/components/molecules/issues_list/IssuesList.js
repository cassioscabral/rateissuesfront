'use strict';

import React from 'react';
import Issue from 'components/molecules/issue/Issue';

require('./stylesheets/issues_list.scss');

class IssuesList extends React.Component {
  render() {
    var issues = this.props.issues;
    return (
      <div className='issues-list-component'>
        {issues.map(issue => <Issue
          title={issue.title}
          summary={issue.summary}
          numVotes={issue.stats.numVotes}
          numComments={issue.stats.numComments}
          difficulty={issue.stats.difficulty}
          />)
        }
      </div>
    );
  }
}

IssuesList.displayName = 'MoleculeIssuesList';

// Uncomment properties you need
// IssuesList.propTypes = {};
// IssuesList.defaultProps = {};

export default IssuesList;
