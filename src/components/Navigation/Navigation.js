/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {PropTypes} from 'react'
import {defineMessages, FormattedMessage} from 'react-intl'
import {connect} from 'react-redux'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Navigation.scss'
import Link from '../Link'
 import {FaAngleDown} from 'react-icons/lib/fa'


const messages = defineMessages({
  about: {
    id: 'navigation.about',
    defaultMessage: 'About',
    description: 'About link in header'
  },
  contact: {
    id: 'navigation.contact',
    defaultMessage: 'Contact',
    description: 'Contact link in header'
  },
  logout: {
    id: 'navigation.logout',
    defaultMessage: 'logout',
    description: 'logout link in header'
  },
  enter: {
    id: 'navigation.enter',
    defaultMessage: 'Enter',
    description: 'Enter link in header'
  }
})

function Navigation ({className, userId}) {
  // TODO specify which id is that
  const renderLogin = () => {
    if (userId) {
      return (
        <a
          className={ cx(s.link, s.highlight) }
          href="/logout/auth0"
        >
          <FormattedMessage { ...messages.logout } />
        </a>
      )
    } else {
      return (
        <a
          className={ cx(s.link, s.highlight) }
          href="/login/auth0"
        >
          <FormattedMessage { ...messages.enter } />
        </a>
      )
    }
  }
  return (
    <div
      className={ cx(s.root, className) }
      role="navigation"
    >
      <Link
        className={ s.link }
        to="/about"
      >
        <FormattedMessage { ...messages.about } />
      </Link>
      <Link
        className={ s.link }
        to="/contact"
      >
        <FormattedMessage { ...messages.contact } />
      </Link>
      <span className={ s.spacer }> | </span>
      { renderLogin() }
      <FaAngleDown color={ 'white' } />
    </div>
  )
}

Navigation.propTypes = {
  className: PropTypes.string
}

export default connect(state => ({
  userId: state.user.id
}))(withStyles(s)(Navigation))
