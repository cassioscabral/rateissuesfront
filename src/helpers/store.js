// Use DataStore instead of Container in the browser
import {DataStore} from 'js-data'
import adapter, {dataSource} from './adapter'

// Create a store to hold your Mappers
const store = new DataStore()

store.registerAdapter(dataSource, adapter, {default: true})

const project = store.defineMapper('project')
const tech = store.defineMapper('tech')

export {
  store as default,
  project,
  tech
}
