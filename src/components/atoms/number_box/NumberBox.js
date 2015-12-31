'use strict';

import React from 'react';

require('./stylesheets/number_box.scss');

class NumberBox extends React.Component {
  render() {
    return (
      <div className='number-box-component'>
        Please edit src/components/atoms/number_box/NumberBox.js to update this component!
      </div>
    );
  }
}

NumberBox.displayName = 'AtomNumberBox';

// Uncomment properties you need
// NumberBox.propTypes = {};
// NumberBox.defaultProps = {};

export default NumberBox;
