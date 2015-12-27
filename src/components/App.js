require('normalize.css');
require('styles/App.scss');

import React from 'react';
import Hello from 'components/atoms/hello/Hello';
import TopMenu from 'components/organisms/top_menu/TopMenu';

class AppComponent extends React.Component {
  render() {
    return (
      <div id='app' className='app'>
        <TopMenu />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
