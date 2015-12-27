'use strict';

import React from 'react';

require('./stylesheets/main.scss');

class Main extends React.Component {
  render() {
    return (
      <div className='main-component'>
        Please edit src/components/organisms/main/Main.js to update this component!
      </div>
    );
  }
}

Main.displayName = 'OrganismMain';

// Uncomment properties you need
// Main.propTypes = {};
// Main.defaultProps = {};

export default Main;
