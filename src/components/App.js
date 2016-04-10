// require('normalize.css') FIXME npm package is not updated
require('styles/_colors.scss')
require('styles/_utils.scss')
require('styles/_layout.scss')
require('styles/App.scss')

import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import TopMenu from 'components/organisms/top_menu/TopMenu'
import Sidebar from 'components/organisms/sidebar/Sidebar'
import Main from 'components/organisms/main/Main'

injectTapEventPlugin()

class AppComponent extends React.Component {
  render() {
    return (
      <div id='app' className='app'>
        <TopMenu />
        <div className='row full-height'>
          <Main />
          <Sidebar />
        </div>
      </div>
    )
  }
}

AppComponent.defaultProps = {
}

export default AppComponent
