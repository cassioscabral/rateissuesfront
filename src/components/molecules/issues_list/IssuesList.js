'use strict';

import React from 'react';
import Issue from 'components/molecules/issue/Issue';
import Github from 'github-api';
import GithubQueryBuilder from '../../helpers/GithubQueryBuilder';

require('./stylesheets/issues_list.scss');

class IssuesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {issues:  []};
  }

  componentDidMount() {
    let github = new Github({});
    let githubQuery = new GithubQueryBuilder();
    let search = github.getSearch(githubQuery.getQuery());
    var that = this;

    search.issues(null, function(err, issues) {
      var oldIssues = that.state.issues;

      oldIssues.push(...issues.items);
      that.setState({
        issues: oldIssues
      });
      console.log(oldIssues[0]);
      console.log(oldIssues[1]);
    });

  };

  render() {
    return (
      <div className='issues-list-component'>
        {this.state.issues.map(issue => <Issue
          key={issue.id}
          issue={issue}
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
