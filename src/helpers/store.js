// Use DataStore instead of Container in the browser
import {DataStore} from 'js-data'
import adapter, {dataSource} from './adapter'

// Create a store to hold your Mappers
const store = new DataStore()

store.registerAdapter(dataSource, adapter, {default: true})

store.defineMapper('project')

export default store
