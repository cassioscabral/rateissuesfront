require('normalize.css');
require('styles/App.scss');

import React from 'react';
import Hello from 'components/atoms/hello/Hello';
import Logo from 'components/atoms/logo/Logo';

class AppComponent extends React.Component {
  render() {
    return (
      <div id='app' className='app'>
        <Logo />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
