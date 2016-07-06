import React, {PropTypes} from 'react'
import {defineMessages} from 'react-intl'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './UserInfo.scss'

const messages = defineMessages({
  pictureAlt: {
    id: 'userInfo.pictureAlt',
    defaultMessage: 'user\'s picture',
    description: 'User picture alt message'
  }
})

function UserInfo ({picture, pictureAlt = {...messages.pictureAlt}, displayName}) {
  return (
    <div className={ s.userInfo }>
      <img
        src={ picture }
        alt={ pictureAlt }
      />
      { displayName }
    </div>
  )
}

UserInfo.propTypes = {
  picture: PropTypes.string,
  displayName: PropTypes.string.isRequired,
  pictureAlt: PropTypes.string
}

export default withStyles(s)(UserInfo)
