import GitHub from 'github-api'

import {tech as TechMapper, project as ProjectMapper} from '../../src/helpers/store.js'
import techs from '../techs/index.js'
import projects from '../projects/index.js'

let accessToken = ''
const search = new GitHub({token:accessToken}).search()

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
}

const find = (query, mapper) => {
  return mapper
  .findAll(query)
}

const getFullName = (link) => {
  let data = {
    error: false,
    full_name: ''
  }

  link = link.split('github.com/')[1]
  let args = link.split('/')
  if (args.length === 2 && args[0] && args[1]) {
    data.data = `${args[0]}/${args[1]}`
  }else{
    data.error = true
  }

  return data
}

const asyncSeries = (fns, promise) => {
  return fns.reduce((p, fn) => {
    return p.then(fn)
  }, promise)
}

const debug = (module) => {
  return (err) => {
    console.log('-------------------')
    console.log(`err: ${module}: ${err}`)
    console.log('-------------------')
  }
}

const tasks = Promise
.resolve()
.catch(debug('tasks'))

const techLogger = counterLogger(techs.length, 'Tech')
const techTasks = techs.reduce(
  (previous, current) => {
    const tech = current
    const query = {where: {id: {'===': tech.id}}}
    previous.push(() => {
      return find(query, TechMapper)
      .catch(debug('findTech'))
      .then(techFound => {
        if (techFound.length === 0){// not found
          console.log('Saving...')
          store(tech, TechMapper)
          .catch(debug('storeTech'))
        }else {
          console.log('tech found:', techFound[0].name)
        }
      })
      .then(techLogger)
    })

    return previous
  },
  []
)
asyncSeries(techTasks, tasks)


const projectTasks= projects.reduce(
  (previous, current) => {
    const project = current
    const projectLogger = counterLogger(project.links.length, `${project.tech.name}/${project.tech.category}`)

    project.links.reduce(
      (previous, current) => {
        const link = current
        const fullName = getFullName(link)
        const query = {where: {full_name: {'===': fullName.data}}}

        if (!fullName.error) {
          previous.push(() => {
            console.log('searching...', fullName.data)
            return find(query, ProjectMapper)
            .catch(debug('findProject'))
            .then(projectsFound => {
              if (projectsFound.length === 0){// not found
                console.log('Not found:', fullName.data)
                return search
                ._request('GET', `https://api.github.com/repos/${fullName.data}`)
                .catch(debug('github'))
                .then(githubData => {
                  if (githubData.data.message === 'Not Found'){
                    console.log('Github: Not found')
                  }else{
                    console.log('Saving...', githubData.data.full_name)
                    return store({...githubData.data, tech: project.tech}, ProjectMapper)
                    .catch(debug('storeProject'))
                    .then(() => {
                      console.log('Saved:', githubData.data.full_name)
                    })
                  }
                })
                .catch(err => {
                  console.log(err)
                })
              }else {
                console.log('project found:', projectsFound[0].full_name)
              }
            })
            .then(projectLogger)
          })
        }else {
          previous.push(() => {
            projectLogger()
          })
        }

        return previous
      },
      previous
    )

    return previous
  },
  []
)

asyncSeries(projectTasks, tasks)
