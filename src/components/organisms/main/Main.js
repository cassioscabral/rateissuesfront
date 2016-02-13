'use strict';

import React from 'react';
import IssuesList from 'components/molecules/issues_list/IssuesList';
import IssuesTabs from 'components/molecules/issues_tabs/IssuesTabs';
import Settings from 'components/atoms/settings/Settings';

require('./stylesheets/main.scss');

class Main extends React.Component {
  render() {
    var issuesData = [
      {
        title: 'Issue title explaining the problem',
        summary: 'I have a problem, Houston',
        stats: {
          numVotes: 2,
          numComments: 10,
          difficulty: 5
        }
      },
      {
        title: 'Something problematic for this project',
        summary: 'I don\'t have enough cats here, what do I do?',
        stats: {
          numVotes: 5,
          numComments: 3,
          difficulty: 3
        }
      }
    ];
    return (
      <div className='main-component column'>
        <div className='tabs row'>
          <header>
          <b>Hot Issues</b>
          </header>
          <IssuesTabs/>
        </div>
        <IssuesList filter-selected='hot' issues={issuesData} />
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
