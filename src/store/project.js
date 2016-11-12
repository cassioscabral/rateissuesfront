import {project as ProjectMapper} from 'src/helpers/store'
import {
  ADD_PROJECTS,
  ADD_PROJECTS_FILTERED_BY_ID,
  ADD_PROJECT
} from './mutations.js'

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
    [ADD_PROJECTS_FILTERED_BY_ID] (state, {projectsFilteredById, query}) {
      state.projectsFilteredById = {
        query,
        data: projectsFilteredById
      }
    },
    [ADD_PROJECT] (state, {project}) {
      state.projects = [...state.projects, project]
    }
  },

  getters: {
    projects: (state) => state.projects,
    projectsFilteredById: (state) => state.projectsFilteredById
  },

  actions: {
    findProjectsByIds ({commit}, {ids = []}) {
      let query = {}
      query.where = {id: {in: ids}}

      ProjectMapper.findAll(query).then(projects => {
        // transform from array to object with id as keys
        let projectsFilteredById = projects.reduce((previous, current) => {
          previous[current.id] = {...current}
          return previous
        }, {})
        commit(ADD_PROJECTS_FILTERED_BY_ID, {projectsFilteredById, query})
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
    },
    async addProject ({commit, state}, project) {
      try {
        let newProject = await ProjectMapper.create({
          ...project
        })
        commit(ADD_PROJECT, {newProject})

        // Update projectsFilteredById to reflect the projects change
        let projectsFilteredById = {
          ...state.projectsFilteredById.data,
          [`${newProject.id}`]: newProject
        }
        commit(ADD_PROJECTS_FILTERED_BY_ID, {
          projectsFilteredById,
          query: state.projectsFilteredById.query
        })
      } catch (err) {
        console.error(err)
      }
    }
  }

}
