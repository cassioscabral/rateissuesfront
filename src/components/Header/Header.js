/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import {defineMessages, FormattedMessage, injectIntl} from 'react-intl'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Header.scss'
import {connect} from 'react-redux'
import Link from '../Link'
import Navigation from '../Navigation'
// import LanguageSwitcher from '../LanguageSwitcher'
import {FaAngleDown} from 'react-icons/lib/fa'
import UserInfo from '../UserInfo'

const messages = defineMessages({
  brand: {
    id: 'header.brand',
    defaultMessage: 'Rate Issues',
    description: 'Brand name displayed in header'
  }
})

const onUserClick = () => { console.log('testss') }

function Header ({displayName, picture}) {
  const renderUser = (onClick = null) => {
    if (picture) {
      return (
        <div className={ s.user }
          >
          <UserInfo picture={ picture }
            displayName={ displayName }
            >
          </UserInfo>
          <FaAngleDown color={ 'white' }
            onClick={ onClick }
            />
        </div>
      )
    }
  }
  return (
    <div className={ s.root }>
      <div className={ s.container }>
        <div className="leftHeader">
          <Link
            className={ s.brand }
            to="/"
            >
            <span className={ s.brandTxt }>
              <FormattedMessage { ...messages.brand } />
            </span>
          </Link>
        </div>
        <div className="rightHeader">
          <div className={ s.linkHolder }>
            { /* <LanguageSwitcher />*/ }
            <Navigation className={ s.nav } />
            { renderUser(onUserClick) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(state => ({
  displayName: state.user.displayName,
  picture: state.user.picture
}))((injectIntl(withStyles(s)(Header))))
