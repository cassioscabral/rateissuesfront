'use strict'

import React from 'react'
import MdArrowUp from 'react-icons/md/arrow_drop_up'

require('./stylesheets/vote_up.scss')

class VoteUp extends React.Component {
  render () {
    return (
      <div className='vote-up-component'
        onClick={ this.props.onClick }>
        <MdArrowUp
          size='42'
          color={ this.props.color } />
      </div>
    )
  }
}

VoteUp.displayName = 'AtomVoteUp'

// Uncomment properties you need
// VoteUp.propTypes = {};
// VoteUp.defaultProps = {};

export default VoteUp
