'use strict';

import React from 'react';
import FontIcon from 'material-ui/lib/font-icon';

require('./stylesheets/vote_up.scss');

class VoteUp extends React.Component {
  render() {
    return (
      <div className='vote-up-component'>
        <FontIcon className='material-icons'
                  color='grey'>
        arrow_drop_up
        </FontIcon>
      </div>
    );
  }
}

VoteUp.displayName = 'AtomVoteUp';

// Uncomment properties you need
// VoteUp.propTypes = {};
// VoteUp.defaultProps = {};

export default VoteUp;
