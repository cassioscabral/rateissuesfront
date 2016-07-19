import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Sample.scss'
import {defineMessages, injectIntl} from 'react-intl'
import {connect} from 'react-redux'

const messages = defineMessages({
  sampleText: {
    id: 'sample.sampleText',
    defaultMessage: 'Sample',
    description: 'SampleDescription'
  }
})

function Sample ({someProp}) {
  return (
    <div className={ s.root }>
      { messages.sampleText } { someProp }
    </div>
  )
}

Sample.propTypes = {
  someProp: PropTypes.string.isRequired
}

export default connect(state => ({
  displayName: state.user.displayName
}))((injectIntl(withStyles(s)(Sample))))