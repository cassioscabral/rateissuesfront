'use strict';

import React from 'react';
import FontIcon from 'material-ui/lib/font-icon';

require('./stylesheets/settings.scss');

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false};
  }
  handleClick() {
    this.setState({active: !this.state.active});
  }
  render() {
    return (
      <div className='settings-component' onClick={this.handleClick.bind(this)}>
        <FontIcon className='material-icons' color='grey'>settings</FontIcon>
      </div>
    );
  }
}

Settings.displayName = 'AtomSettings';

// Uncomment properties you need
// Settings.propTypes = {};
// Settings.defaultProps = {};

export default Settings;
