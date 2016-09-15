import React from 'react'
import Issue from './Issue'

export default {
  path: '/project/*/issue/*',

  async action ({path}) {
    return <Issue path={ path } />
  }
}
