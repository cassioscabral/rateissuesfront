import {project as ProjectMapper} from 'src/helpers/store'
import {
  ADD_PROJECTS,
  REMOVE_PROJECTS,
  ADD_PROJECTS_FILTERED_BY_ID,
  REMOVE_PROJECTS_FILTERED_BY_ID} from './mutations.js'

export default {
  state: {
    projects: [],
    projectsFilteredById: {
      query:{},
      data:{}
    }
  },

  mutations:{
    [ADD_PROJECTS] (state, projects) {
      state.projects = projects
    },
    [REMOVE_PROJECTS] (state) {
      state.projects = []
    },
    [ADD_PROJECTS_FILTERED_BY_ID] (state, payload) {
      state.projectsFilteredById = {
        query: payload.query,
        data: payload.projects.reduce((previous, current) => {
          previous[current.id] = current
          return previous
        },{})
      }
    },
    [REMOVE_PROJECTS_FILTERED_BY_ID] (state) {
      state.projectsFilteredById = []
    }
  },

  getters: {
    projects: (state) => state.projects,
    projectsFilteredById: (state) => state.projectsFilteredById
  },

  actions: {
    findProjectsByIds ({commit}, payload) {
      let query = {}
      let ids = payload.ids || []
      query.where = {id:{in: ids}}

      ProjectMapper.findAll(query).then(projects => {
        commit(ADD_PROJECTS_FILTERED_BY_ID, {query, projects})
      })
    },
    findProjects ({commit}, input) {
      let query = {}
      if (input) {
        query.where = {full_name:{contains: input.target.value}}
      }
      ProjectMapper.findAll(query).then(projects => {
        commit(ADD_PROJECTS, projects)
      })
    }
  }

}
