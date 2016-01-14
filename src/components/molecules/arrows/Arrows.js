'use strict';

import React from 'react';
import VoteDown from 'components/atoms/vote_down/VoteDown';
import VoteUp from 'components/atoms/vote_up/VoteUp';

require('./stylesheets/arrows.scss');

class Arrows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {up: false, down: false, colorUp: 'grey', colorDown: 'grey'};
  }

  handleDownVote() {
    this.setState({down: !this.state.down,
                   up: false,
                   colorDown: this.state.down ?  'grey' : 'rgb(230, 40, 7)',
                   colorUp: 'grey'
                 });
  }

  handleUpvote() {
    this.setState({up: !this.state.up,
                   down: false,
                   colorUp: this.state.up ? 'grey' : 'rgb(88, 200, 42)',
                   colorDown: 'grey'
                 });
  }
  render() {
    return (
      <div className='arrows-component column'>
        <VoteUp onClick={this.handleUpvote.bind(this)}
          color={this.state.colorUp} />
        <VoteDown onClick={this.handleDownVote.bind(this)}
          color={this.state.colorDown} />
      </div>
    );
  }
}

Arrows.displayName = 'MoleculeArrows';

// Uncomment properties you need
// Arrows.propTypes = {};
// Arrows.defaultProps = {};

export default Arrows;
