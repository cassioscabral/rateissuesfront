'use strict';

import React from 'react';

require('./stylesheets/tab.scss');

class Tab extends React.Component {
  render() {
    return (
      <div className='tab-component'>
        <span>{this.props.name}</span>
      </div>
    );
  }
}

Tab.displayName = 'AtomTab';

// Uncomment properties you need
// Tab.propTypes = {};
// Tab.defaultProps = {};

export default Tab;
