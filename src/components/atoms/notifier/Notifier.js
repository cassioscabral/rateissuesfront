'use strict';

import React from 'react';
// import {FontIcon} from 'material-ui'

require('./stylesheets/notifier.scss');

class Notifier extends React.Component {
  render() {
    return (
      <div className='notifier-component'>
        {/*<FontIcon className='material-icons' color='white'>{this.props.icon}</FontIcon>*/}
      </div>
    );
  }
}

Notifier.displayName = 'AtomNotifier';

// Uncomment properties you need
// Notifier.propTypes = {};
// Notifier.defaultProps = {};

export default Notifier;
