import {project as ProjectMapper} from 'src/helpers/store'
import {
  ADD_PROJECTS,
  ADD_PROJECTS_FILTERED_BY_ID} from './mutations.js'

export default {
  state: {
    projects: [],
    projectsFilteredById: {
      query:{},
      data:{}
    }
  },

  mutations:{
    [ADD_PROJECTS] (state, payload) {
      state.projects = payload.projects
    },
    [ADD_PROJECTS_FILTERED_BY_ID] (state, payload) {
      let projects = payload.projects.reduce((previous, current) => {
        previous[current.id] = {...current}
        return previous
      },{})
      state.projectsFilteredById = {
        query: payload.query,
        data: projects
      }
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
        commit(ADD_PROJECTS, {projects})
      })
    }
  }

}
