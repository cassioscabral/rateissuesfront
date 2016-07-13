import React, {PropTypes as RP} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './PopUpMenu.scss'
import cx from 'classnames'

const generateMenuSections = (menuSections) => {
  return (
    <ol className={ s.menu }>
      {
        menuSections.map((menuSection) => {
          return (
            // menuSection.headingTitle
            <ol className={ s.menuSection }>
              <li className={ s.sectionHeadingTitle }>{ menuSection.headingTitle }</li>
              {
                menuSection.menuItems.map((menuItem) => {
                  return MenuItem(menuItem)
                })
              }
            </ol>
          )
        })
      }
    </ol>
  )
}

function MenuItem ({text, url, icon}) {
  return (
    <li className={ s.menuItem }>
      <a href={ url }
        className={ cx(s.menuLink, icon) }
        >
        { text }
      </a>
    </li>
  )
}

function PopUpMenu ({menuItems}) {
  return (
    <div className={ s.root }>
      { generateMenuSections(menuItems) }
    </div>
  )
}

PopUpMenu.propTypes = {
  menuItems: RP.arrayOf(
    RP.shape({
      headingTitle: RP.string,
      order: RP.number,
      menuItems: RP.arrayOf(
        RP.shape({
          text: RP.string.isRequired,
          url: RP.string.isRequired,
          icon: RP.string,
          order: RP.number
        })
      )
    })
  )
}

export default (withStyles(s)(PopUpMenu))
