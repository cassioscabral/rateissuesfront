'use strict';

import React from 'react';
import FontIcon from 'material-ui/lib/font-icon';

require('./stylesheets/vote_up.scss');

class VoteUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false, color: 'grey'};
  }

  handleClick(event) {
    this.setState({active: !this.state.active});
    this.setState({color: this.state.active ? 'rgb(75, 242, 7)' : 'grey'});
  }

  render() {
    return (
      <div className='vote-up-component' onClick={this.handleClick.bind(this)}>
        <FontIcon className='material-icons'
                  color={this.state.color}>
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
