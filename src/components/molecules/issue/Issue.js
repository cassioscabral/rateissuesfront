'use strict';

import React from 'react';
import CounterBox from 'components/molecules/counter_box/CounterBox';
import Arrows from 'components/molecules/arrows/Arrows';

require('./stylesheets/issue.scss');

class Issue extends React.Component {
  render() {
    var issue = this.props;
    return (
      <div className='issue-component row'>
        <CounterBox numVotes={issue.numVotes}
                    numComments={issue.numComments}
                    difficulty={issue.difficulty} />
        <Arrows />
        <div className='description column'>
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
