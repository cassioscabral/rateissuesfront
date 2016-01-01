'use strict';

import React from 'react';
import FontIcon from 'material-ui/lib/font-icon';

require('./stylesheets/settings.scss');

class Settings extends React.Component {
  render() {
    return (
      <div className='settings-component'>
        <FontIcon className='material-icons' color='white'>settings</FontIcon>
      </div>
    );
  }
}

Settings.displayName = 'AtomSettings';

// Uncomment properties you need
// Settings.propTypes = {};
// Settings.defaultProps = {};

export default Settings;
