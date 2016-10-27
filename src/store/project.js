import {project as ProjectMapper} from 'src/helpers/store'
import {ADD_PROJECTS, REMOVE_PROJECTS} from './mutations.js'

export default {
  state: {
    projects: []
  },

  mutations:{
    [ADD_PROJECTS] (state, projects) {
      state.projects = projects
    },
    [REMOVE_PROJECTS] (state) {
      state.projects = []
    }
  },

  getters: {
    projects: (state) => state.projects
  },

  actions: {
    findProjects ({commit}, input) {
      let query = {}
      if (input) {
        query.where = {name:{contains: input.target.value}}
      }
      ProjectMapper.findAll(query).then(projects => {
        commit(ADD_PROJECTS, projects)
      })
    }
  }

}
