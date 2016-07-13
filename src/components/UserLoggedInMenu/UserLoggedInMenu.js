import React, {Component, PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './UserLoggedInMenu.scss'
import {injectIntl} from 'react-intl'
import {FaAngleDown} from 'react-icons/lib/fa'
import PopUpMenu from '../PopUpMenu'
import Togglable from '../Togglable'


const menuItems = [
  {
    headingTitle: 'Section 1',
    order: 1,
    menuItems: [
      {
        text: 'MenuItem 1',
        url: 'https://github.com/cassioscabral/rateissuesfront',
        icon: null,
        order: 1
      },
      {
        text: 'MenuItem 2',
        url: 'https://github.com/cassioscabral/rateissuesfront/issues',
        icon: null,
        order: 2
      }
    ]
  }
]

const onUserClick = () => { console.log('testss') }

class UserLoggedInMenu extends Component {
  render () {
    return (
      <div className={ s.root }>
        <Togglable toggleComponent={ <FaAngleDown color={ 'white' } /> }>
          <PopUpMenu menuItems={ menuItems } />
        </Togglable>
      </div>
    )
  }
}

export default (injectIntl(withStyles(s)(UserLoggedInMenu)))
