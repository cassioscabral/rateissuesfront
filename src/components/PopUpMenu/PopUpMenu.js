import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './PopUpMenu.scss'

const generateSections = (sections) => {
  console.log(sections)
  return (
    <ol>
      {
        sections.map((section) => {
          return (
            // section.headingTitle
            <ol>
              <li>{ section.headingTitle }</li>
              {
                section.menuItems.map((menuItem) => {
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
    <li>
      <a href={ url }
        className={ icon }
        >
        { text }
      </a>
    </li>
  )
}

function PopUpMenu ({menuItems}) {
  return (
    <div>
      { generateSections(menuItems) }
    </div>
  )
}

PopUpMenu.propTypes = {
  menuItems: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      headingTitle: React.PropTypes.string,
      order: React.PropTypes.number,
      menuItems: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          text: React.PropTypes.string.isRequired,
          url: React.PropTypes.string.isRequired,
          icon: React.PropTypes.string,
          order: React.PropTypes.number
        })
      )
    })
  )
}

export default (withStyles(s)(PopUpMenu))
