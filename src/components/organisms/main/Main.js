'use strict';

import React from 'react';
import IssuesList from 'components/molecules/issues_list/IssuesList';

require('./stylesheets/main.scss');

class Main extends React.Component {
  render() {
    var issuesData = [
      {
        title: 'Issue title explaining the problem',
        summary: 'I have a problem, Houston'
      },
      {
        title: 'Something problematic for this project',
        summary: 'I don\'t have enough cats here, what do I do?'
      }
    ];
    return (
      <div className='main-component column'>
        <div className='row'>
          <header>
            Hot Issues
          </header>
          <div className='tabs'>
            <span>Hot</span>
            <span>Trending</span>
            <span>Fresh</span>
          </div>
        </div>
        <IssuesList filter-selected='hot' issues={issuesData} />
      </div>
    );
  }
}

Main.displayName = 'OrganismMain';

// Uncomment properties you need
// Main.propTypes = {};
// Main.defaultProps = {};

export default Main;
