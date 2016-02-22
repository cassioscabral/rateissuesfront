'use strict';

import React from 'react';
import Issue from 'components/molecules/issue/Issue';
import Github from 'github-api';
import GithubQueryBuilder from '../../helpers/GithubQueryBuilder';

require('./stylesheets/issues_list.scss');

class IssuesList extends React.Component {
  constructor(props) {
    super(props);
    let githubQuery = new GithubQueryBuilder();
    this.state = {issues: [], query: githubQuery.getQuery()};
  }

  componentDidMount() {
    let github = new Github({});
    let search = github.getSearch(this.state.query);
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
