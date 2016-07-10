import React, {PropTypes as RP} from 'react'
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
