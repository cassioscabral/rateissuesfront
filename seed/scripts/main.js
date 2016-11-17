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
  isSaved (item) {
    if (item) {
      throw 'is already saved'
    }
  },
  storeProject (item) {
    return DB.store(item, 'project', ProjectMapper)
  },
  storeTech (item) {
    return DB.store(item, 'tech', TechMapper)
  },
  store (item, name, mapper) {
    return mapper
    .create(item)
    .catch(`${name}Store`)
  },
  findOneProject (query) {
    return DB.findOne(query, 'project', ProjectMapper)
  },
  findOneTech (query) {
    return DB.findOne(query, 'tech', TechMapper)
  },
  findOne (query, name, mapper) {
    return mapper
    .findAll(query)
    .then(items => items.length > 0 ? items[0] : null)
    .catch(`${name}Find`)
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

class Tech {
  constructor (tech) {
    this.tech = tech
  }

  createIDQuery () {
    const ID = this.tech.id
    return () => {
      return {where: {id: {'===': ID}}}
    }
  }

  createTask () {
    const ID = this.tech.id

    return Async
    .createPromise(ID)
    .then(Logger.log(`${ID}: searching on DB`))
    .then(this.createIDQuery())
    .then(DB.findOneTech)
    .then(DB.isSaved)
    .then(Logger.log('saving on DB'))
    .then(DB.storeTech)
    .then(Logger.log('saved'))
    .catch(Logger.debug(ID))
  }
}


class Project {
  constructor (project) {
    this.project = project
  }

  getFullName () {
    const link = this.project.link
    return () => {
      return GH.getFullName(link)
    }
  }

  createFullNameQuery (fullName) {
    return () => {
      return {where: {full_name: {'===': fullName}}}
    }
  }

  createTask () {
    const link = this.project.link
    const tech = this.project.tech

    return Async
    .createPromise(link)
    .then(Logger.log(`${link}: searching on DB`))
    .then(this.getFullName())
    .then(this.createFullNameQuery)
    .then(DB.findOneProject)
    .then(DB.isSaved)
    .then(Logger.log('searching on Github'))
    .then(this.getFullName())
    .then(GH.search)
    .then(Logger.log('saving on DB'))
    .then((githubData) => {
      DB.storeProject({...githubData, tech})
    })
    .then(Logger.log('saved'))
    .catch(Logger.debug(link))
  }
}

const tasks = Async.createPromise('tasks')


const techTasks = techs.map((tech) => {
  return () => {
    return new Tech(tech)
    .createTask()
    .catch('Tech')
  }
})

const projectTasks = projects.reduce((previous, current) => {
  const tech = current.tech

  const tasks = current.links.map((link) => {
    return () => {
      return new Project({tech, link})
      .createTask()
      .catch('Project')
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
