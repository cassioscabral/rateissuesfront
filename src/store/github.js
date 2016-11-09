import GitHub from 'github-api'
import {ADD_GITHUB_REPOSITORIES} from './mutations.js'


export default {
  state: {
    repositories: {}
  },

  mutations: {
    [ADD_GITHUB_REPOSITORIES] (state, payload) {
      state.repositories = payload.repositories
    }
  },

  getters: {
    repositories: (state) => state.repositories
  },

  actions: {
    githubSearch ({dispatch, rootState}, input) {
      let query = input.target.value
      let accessToken = rootState.auth.accessToken

      const search = new GitHub({token:accessToken}).search()

      search
        ._request('GET', `https://api.github.com/search/repositories?type=all&sort=updated&per_page=10&q=${query}`)
        .then(response => response.data.items)
        .then(repositories => {
          dispatch('githubSaveRepositories', {repositories})
        })
    },
    githubSaveRepositories ({commit, dispatch}, payload) {
      let repositories = payload.repositories.reduce((previous, current) => {
        previous[current.id] = {...current}
        return previous
      },{})
      commit(ADD_GITHUB_REPOSITORIES, {repositories})
      dispatch('githubUpdateProjects')
    },
    githubUpdateProjects ({dispatch, state}){
      let ids = state.repositories.map(data => data.id) || []
      dispatch('findProjectsByIds', {ids})
    }

  }

}
