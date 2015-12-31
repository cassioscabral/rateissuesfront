'use strict';

import React from 'react';

require('./stylesheets/counter_box.scss');

class CounterBox extends React.Component {
  render() {
    return (
      <div className='counter-box-component'>
        Please edit src/components/molecules/counter_box/CounterBox.js to update this component!
      </div>
    );
  }
}

CounterBox.displayName = 'MoleculeCounterBox';

// Uncomment properties you need
// CounterBox.propTypes = {};
// CounterBox.defaultProps = {};

export default CounterBox;
