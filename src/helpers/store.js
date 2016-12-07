// Use DataStore instead of Container in the browser
import {DataStore} from 'js-data'
import adapter, {dataSource} from './adapter'

// Create a store to hold your Mappers
const store = new DataStore()

store.registerAdapter(dataSource, adapter, {default: true})

const category = store.defineMapper('category',{
  relations: {
    hasMany: {
      project: {
        foreignKeys: 'categoryIds',
        localField: 'projects'
      }
    }
  }
})
const tech = store.defineMapper('tech')
const project = store.defineMapper('project',{
  relations: {
    hasMany: {
      category: {
        localKeys: 'categoryIds',
        localField: 'categories'
      }
    }
  }
})

export {
  store as default,
  project,
  tech,
  category
}
