import React from 'react'
import Repository from './Repository'

export default {
  path: '/repository/*',

  async action ({path}) {
    return <Repository path={ path } />
  }
}
