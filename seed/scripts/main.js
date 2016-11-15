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
  return mapper
  .create(item)
  .catch(err => {
    console.log(err)
  })
}

const find = (query, mapper) => {
  return mapper
  .findAll(query)
  .catch(err => {
    console.log(err)
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
.forEach(async (tech) => {
  const query = {where: {id: {'===': tech.id}}}
  const hasTech = await find(query, TechMapper)

  if (!hasTech){
    console.log('Saving...')
    await store(tech, TechMapper)
  }

  techLogger()
})

projects
.forEach((project) => {
  const projectLogger = counterLogger(project.links.length, `${project.tech.name}/${project.tech.category}`)
  project.links.forEach(async link => {
    const fullName = await getFullName(link)
    if (!fullName.error) {
      const query = {where: {full_name: {'===': fullName.data}}}
      const hasProject = await find(query, ProjectMapper)

      if (!hasProject){
        console.log('Saving...')
        let githubData = search
          ._request('GET', `https://api.github.com/repos/${fullName.data}`)
        await store({...githubData.data, tech: project.tech})
      }
    }

    projectLogger()
  })
})
