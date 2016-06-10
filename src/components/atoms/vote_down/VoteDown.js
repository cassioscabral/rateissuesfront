import React from 'react'
import MdArrowDown from 'react-icons/md/arrow_drop_down'

require('./stylesheets/vote_down.scss')

class VoteDown extends React.Component {

  render () {
    return (
      <div className='vote-down-component'
        onClick={ this.props.onClick }>
        <MdArrowDown
          size='42'
          color={ this.props.color } />
      </div>
    )
  }
}

VoteDown.displayName = 'AtomVoteDown'

// Uncomment properties you need
// VoteDown.propTypes = {};
// VoteDown.defaultProps = {};

export default VoteDown
