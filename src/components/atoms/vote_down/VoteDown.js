'use strict';

import React from 'react';
import FontIcon from 'material-ui/lib/font-icon';

require('./stylesheets/vote_down.scss');

class VoteDown extends React.Component {
  render() {
    return (
      <div className='vote-down-component'>
        <FontIcon className='material-icons'
                  color='grey'>
        arrow_drop_down
        </FontIcon>
      </div>
    );
  }
}

VoteDown.displayName = 'AtomVoteDown';

// Uncomment properties you need
// VoteDown.propTypes = {};
// VoteDown.defaultProps = {};

export default VoteDown;
