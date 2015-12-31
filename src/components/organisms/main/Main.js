'use strict';

import React from 'react';

require('./stylesheets/main.scss');

class Main extends React.Component {
  render() {
    return (
      <div className='main-component'>
        <header>
          Hot Issues
        </header>
        <IssuesList filter-selected='hot' />
      </div>
    );
  }
}

Main.displayName = 'OrganismMain';

// Uncomment properties you need
// Main.propTypes = {};
// Main.defaultProps = {};

export default Main;
