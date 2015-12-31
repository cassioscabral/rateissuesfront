'use strict';

import React from 'react';
import VoteDown from 'components/atoms/vote_down/VoteDown';
import VoteUp from 'components/atoms/vote_up/VoteUp';

require('./stylesheets/arrows.scss');

class Arrows extends React.Component {
  render() {
    return (
      <div className='arrows-component column'>
        <VoteUp />
        <VoteDown />
      </div>
    );
  }
}

Arrows.displayName = 'MoleculeArrows';

// Uncomment properties you need
// Arrows.propTypes = {};
// Arrows.defaultProps = {};

export default Arrows;
