require('normalize.css');
require('styles/App.scss');

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TopMenu from 'components/organisms/top_menu/TopMenu';
import Sidebar from 'components/organisms/sidebar/Sidebar';
import Main from 'components/organisms/main/Main';

injectTapEventPlugin();

class AppComponent extends React.Component {
  render() {
    return (
      <div id='app' className='app'>
        <TopMenu />
        <div className='row'>
          <Main />
          <Sidebar />
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
