require('styles/normalize.css')
require('styles/_colors.scss')
require('styles/_utils.scss')
require('styles/_layout.scss')
require('styles/App.scss')

import React from 'react'
import TopMenu from 'components/organisms/top_menu/TopMenu'
import Sidebar from 'components/organisms/sidebar/Sidebar'
import Main from 'components/organisms/main/Main'

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
