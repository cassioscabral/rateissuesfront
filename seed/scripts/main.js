import GitHub from 'github-api'

import {tech as TechMapper, project as ProjectMapper} from '../../src/helpers/store.js'
import techs from '../techs/index.js'
import projects from '../projects/index.js'

const Logger = {
  debug (module) {
    return (err) => {
      console.log('-------------------')
      console.log(`${module}: ${err}`)
      console.log('-------------------')
    }
  },
  log (message){
    return (data) => {
      console.log(message)
      return data
    }
  }
}

const Async = {
  createPromise (module) {
    return Promise
    .resolve()
    .catch(Logger.debug(module))
  },
  createQueue (fns, promise) {
    return fns.reduce((p, fn) => {
      return p.then(fn)
    }, promise)
  }
}

const DB = {
  project: {name: 'project', mapper: ProjectMapper},
  tech: {name: 'tech', mapper: TechMapper},
  store (item, db) {
    return db.mapper
    .create(item)
    .catch(`${db.name}Store`)
  },
  find (query, db) {
    return db.mapper
    .findAll(query)
    .then(items => items.length > 0 ? items[0] : null)
    .catch(`${db.name}Find`)
  }
}

const GH = {
  getFullName (link) {
    const path = link.split('github.com/')[1]
    const [owner, repo] = path.split('/')
    if (owner && repo) {
      return `${owner}/${repo}`
    }else{
      throw `Cannot get fullName from: ${link}`
    }
  },
  search (fullName) {
    const search = new GitHub().search()

    return search
    ._request('GET', `https://api.github.com/repos/${fullName}`)
    .catch(Logger.debug('github'))
    .then(result => result.data)
  }
}

const Tech = {
  createQuery (tech) {
    return () => {
      return {where: {id: {'===': tech.id}}}
    }
  },
  createTask (tech, position, total) {
    const id = tech.id

    return Async
    .createPromise(tech)
    .then(Logger.log(`Tech: ${position+1}/${total}`))
    .then(Logger.log(`${id}: searching on DB`))
    .then(Tech.createQuery(tech))
    .then((query) => {
      return DB.find(query, DB.tech)
    })
    .then(savedTech => {
      if (savedTech) {
        throw 'is already saved'
      }
    })
    .then(Logger.log('saving on DB'))
    .then(() => {
      DB.store(tech, DB.tech)
    })
    .then(Logger.log('saved'))
    .catch(Logger.debug(id))
  }
}

const Project = {
  createQuery (fullName) {
    return {where: {full_name: {'===': fullName}}}
  },
  createTask (project, position, total) {
    let fullName = ''

    return Async
    .createPromise()
    .then(() => {
      fullName = GH.getFullName(project.link)
    })
    .then(Logger.log(`Project: ${position+1}/${total}`))
    .then(Logger.log('searching on DB'))
    .then(Project.createQuery(fullName))
    .then((query) => {
      return DB.find(query, DB.project)
    })
    .then(savedProject => {
      if (savedProject) {
        throw 'is already saved'
      }
    })
    .then(Logger.log('searching on Github'))
    .then(() => {
      return GH.search(fullName)
    })
    .then(Logger.log('saving on DB'))
    .then((githubData) => {
      DB.store({...githubData, tech: project.tech}, DB.project)
    })
    .then(Logger.log('saved'))
    .catch(Logger.debug('Project'))
  }
}


const tasks = Async.createPromise('tasks')


const techTasks = techs.map((tech, index, array) => {
  return () => {
    return Tech.createTask(tech, index, array.length)
  }
})


const projectTasks = projects.reduce((previous, current) => {
  const tech = current.tech

  const tasks = current.links.map((link, index, array) => {
    return () => {
      return Project.createTask({tech, link}, index, array.length)
    }
  })

  return [...previous, ...tasks]
},[])

Async.createQueue([
  Logger.log('Starting: techs'),
  ...techTasks,
    Logger.log('Starting: projects'),
  ...projectTasks,
  () => {
  process.exit()
  }], tasks)
