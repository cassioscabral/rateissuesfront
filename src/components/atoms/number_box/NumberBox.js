'use strict';

import React from 'react';

require('./stylesheets/number_box.scss');

class NumberBox extends React.Component {
  render() {
    return (
      <div className='number-box-component column'>
        <span>{this.props.number}</span>
        <span>{this.props.label}</span>
      </div>
    );
  }
}

NumberBox.displayName = 'AtomNumberBox';

// Uncomment properties you need
// NumberBox.propTypes = {};
// NumberBox.defaultProps = {};

export default NumberBox;
