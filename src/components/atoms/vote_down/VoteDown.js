'use strict';

import React from 'react';
import FontIcon from 'material-ui/lib/font-icon';

require('./stylesheets/vote_down.scss');

class VoteDown extends React.Component {

  render() {
    const iconStyles = {
      fontSize: '42px',
    };
    return (
      <div className='vote-down-component' onClick={this.props.onClick}>
        <FontIcon className='material-icons'
                  color={this.props.color} style={iconStyles}>
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
