'use strict';

import React from 'react';
import Issue from 'components/molecules/issue/Issue';
import Github from 'github-api';
require('./stylesheets/issues_list.scss');

class IssuesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {issues:  [], teste: '123', issueTitle: '', issue: ''};
  }

  componentDidMount() {
    let github = new Github({});
    let search = github.getSearch('language:javascript&sort=stars&order=desc');
    var that = this;

    search.issues(null, function(err, issues) {
      // that.setState({issues: [{'a': '1'}]});
      // that.setState((state) => { issues: state.issues.push(issues.items); });
      that.setState({
        issueTitle: issues.items[0].title
      });
      //
      // var update = React.addons.update;
      // var afterUpdate = update(that.state.issue, {
      //   issue: {$set: issues.items[0]}
      // });
      // this.setState({issue: afterUpdate});
      //TODO add all at once
      issues.items.forEach((issue) => {
        console.log(issue.title);
        var oldIssues = that.state.issues;
        oldIssues.push(issue);
        that.setState({
          issues: oldIssues
        });
      });
      // var oldIssues = that.state.issues;
      // oldIssues.concat(issues.items);
      // that.setState({
      //   issues: oldIssues
      // });

    });

  };

  render() {
    // var issues = [
    //   {
    //     title: 'Issue title explaining the problem',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eveniet ex accusamus officia ullam veritatis ut qui exercitationem, ipsam fugit magnam laboriosam, assumenda tempore cumque quis placeat dicta sed. Voluptas.',
    //     stats: {
    //       numVotes: 2,
    //       numComments: 10,
    //       difficulty: 5
    //     }
    //   },
    //   {
    //     title: 'Something problematic for this project',
    //     description: 'I don\'t have enough cats here, what do I do?',
    //     stats: {
    //       numVotes: 5,
    //       numComments: 3,
    //       difficulty: 3
    //     }
    //   }
    // ];
    // var issues = this.getIssues();
    return (
      <div className='issues-list-component'>
        {this.state.issues.map(issue => <Issue
          key={issue.id}
          title={issue.title}
          description={issue.body}
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
