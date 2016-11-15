import GitHub from 'github-api'

import {tech as TechMapper, project as ProjectMapper} from '../../src/helpers/store.js'
import techs from '../techs/index.js'
import projects from '../projects/index.js'

const search = new GitHub().search()

const counterLogger = (length, name) => {
  let index = 0
  console.log(`Starting ${name}`)
  return () => {
    index++
    console.log(`${name}: ${index}/${length}`)
  }
}

const store = (item, mapper) => {
  return mapper.create(item)
}

const find = (query, mapper) => {
  return mapper
  .findAll(query)
  .then(result => {
    return result.length > 0
  })
}

const getFullName = (link) => {
  let data = {
    error: false,
    full_name: ''
  }

  link = link.split('github.com/')[1]
  let args = link.split('/')
  if (args.length === 2 && args[0] && args[1]) {
    data.full_name = `${args[0]}/${args[1]}`
  }else{
    data.error = true
  }

  return data
}

const techLogger = counterLogger(techs.length, 'Tech')
techs
.forEach((tech) => {
  const query = {where: {id: {'===': tech.id}}}

  find(query, TechMapper)
  .then(data => {
    if (data) {
      techLogger()
    }else{
      store(tech, TechMapper)
      .then(() => {
        techLogger()
      })
      .catch(err => {
        console.error(err)
        techLogger()
      })
    }
  })
  .catch(err => {
    console.error(err)
    techLogger()
  })
})

projects
.forEach((project) => {
  const projectLogger = counterLogger(project.links.length, `${project.tech.name}/${project.tech.category}`)
  project.links.forEach(link => {
    const fullName = getFullName(link)
    if (fullName.error) {
      projectLogger()
    }else{
      const query = {where: {full_name: {'===': fullName.data}}}
      find(query, ProjectMapper)
      .then(data => {
        if (data) {
          projectLogger()
        }else{
          search
          ._request('GET', `https://api.github.com/repos/${fullName.data}`)
          .then(data => {
            store({
              ... data.data,
              tech: project.tech
            })
            .then(() => {
              projectLogger()
            })
            .catch(err => {
              console.error(err)
              projectLogger()
            })
          })
        }
      })
      .catch(err => {
        console.error(err)
        projectLogger()
      })
    }
  })
})
