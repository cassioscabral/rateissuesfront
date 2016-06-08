'use strict'

import React from 'react'
// import {FontIcon} from 'material-ui'

require('./stylesheets/vote_up.scss')

class VoteUp extends React.Component {
  render () {
    // const iconStyles = {
    //   fontSize: '42px'
    // };
    return (
      <div className='vote-up-component'
        onClick={ this.props.onClick }>
        {/* <FontIcon className='material-icons'
                  color={this.props.color} style={iconStyles}>
        arrow_drop_up
        </FontIcon>*/}
      </div>
    )
  }
}

VoteUp.displayName = 'AtomVoteUp'

// Uncomment properties you need
// VoteUp.propTypes = {};
// VoteUp.defaultProps = {};

export default VoteUp
