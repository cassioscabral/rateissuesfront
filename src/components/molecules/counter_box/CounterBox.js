'use strict'

import React from 'react'
import NumberBox from 'components/atoms/number_box/NumberBox'
require('./stylesheets/counter_box.scss')

class CounterBox extends React.Component {
  render() {
    return (
      <div className='counter-box-component row'>
        <NumberBox number={ this.props.numVotes }
          label='votes' />
        <NumberBox number={ this.props.numComments }
          label='comments' />
        <NumberBox number={ this.props.difficulty }
          label='difficulty' />
      </div>
    )
  }
}

CounterBox.displayName = 'MoleculeCounterBox'

// Uncomment properties you need
// CounterBox.propTypes = {};
// CounterBox.defaultProps = {};

export default CounterBox
