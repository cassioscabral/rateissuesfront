import React from 'react'

require('./stylesheets/app_name.scss')

class AppName extends React.Component {
  render () {
    return (
      <div className='app-name-component'>
        RateIssues
      </div>
    )
  }
}

AppName.displayName = 'AtomAppName'

export default AppName
