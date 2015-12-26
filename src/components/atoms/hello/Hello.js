'use strict';

import React from 'react';

require('./stylesheets/hello.scss');

class Hello extends React.Component {
  render() {
    return (
      <div className='hello'>
        Hello World!
      </div>
    );
  }
}

Hello.displayName = 'AtomHello';

// Uncomment properties you need
// Hello.propTypes = {};
// Hello.defaultProps = {};

export default Hello;
