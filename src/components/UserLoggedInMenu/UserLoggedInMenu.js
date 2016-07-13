import React, {Component, PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './UserLoggedInMenu.scss'
import {injectIntl} from 'react-intl'
import {FaAngleDown} from 'react-icons/lib/fa'
import PopUpMenu from '../PopUpMenu'
import Togglable from '../Togglable'


const menuItems = [
  {
    headingTitle: null,
    order: 1,
    menuItems: [
      {
        text: 'Logout',
        url: '/logout/auth0',
        icon: null,
        order: 2
      }
    ]
  }
]

const UserLoggedInMenu = () => {
  return (
    <div className={ s.root }>
      <Togglable toggleComponent={ <FaAngleDown color={ 'white' } /> }>
        <PopUpMenu menuItems={ menuItems } />
      </Togglable>
    </div>
  )
}

export default (injectIntl(withStyles(s)(UserLoggedInMenu)))
