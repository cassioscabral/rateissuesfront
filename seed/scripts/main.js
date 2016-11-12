import GitHub from 'github-api'

import {tech as TechMapper, project as ProjectMapper} from '../../src/helpers/store.js'
import techs from '../techs/index.js'
import projects from '../projects/index.js'

function save (item, mapper) {
  console.log(`searching ${item.id}...`)
  mapper
  .find(item.id)
  .then(result => {
    if (result) {
      console.log(`${item.id} is already saved!`)
    }else{
      console.log(`saving ${item.id}...`)
      mapper.create(item)
    }
  })
  .catch(err => {
    console.error(err)
  })
}

console.log('Saving techs')
techs
  .reduce((previous, module) => previous.push(module))
  .forEach((tech) => {
     save(tech, TechMapper)
  })


console.log('Saving projects')
projects
  .reduce((previous, module) => previous.push(module))
  .forEach(project => {
    project.links.forEach(link => {
      link = link.replace('https://github.com/','')
      let args = link.split('/')
      if (args.length === 2) {
        let owner = args[0]
        let repo = args[1]
        const search = new GitHub().search()
        search
          ._request('GET', `https://api.github.com/repos/${owner}/${repo}`)
          .then(data => {
             save(
               {
                 ... data.data,
                 tech: project.tech
               },
               ProjectMapper
             )
          }).catch(err => {
            console.error(err)
          })
      }
    })
  })
