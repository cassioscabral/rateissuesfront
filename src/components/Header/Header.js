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
import Link from '../Link'
import Navigation from '../Navigation'
import LanguageSwitcher from '../LanguageSwitcher'

const messages = defineMessages({
  brand: {
    id: 'header.brand',
    defaultMessage: 'Rate Issues',
    description: 'Brand name displayed in header'
  }
})

function Header () {
  return (
    <div className={ s.root }>
      <div className={ s.container }>
        <Link
          className={ s.brand }
          to="/"
          >
          <span className={ s.brandTxt }>
            <FormattedMessage { ...messages.brand } />
          </span>
        </Link>
        <div className={ s.linkHolder }>
          <LanguageSwitcher />
          <Navigation className={ s.nav } />
        </div>
      </div>
    </div>
  )
}

export default injectIntl(withStyles(s)(Header))
