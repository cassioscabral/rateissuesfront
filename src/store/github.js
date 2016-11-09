import GitHub from 'github-api'

export default {
  state: {
    repositories: []
  },

  mutations: {
    'ADD_GITHUB_REPOSITORIES' (state, repositories) {
      state.repositories = repositories
    }
  },

  getters: {
    repositories: (state) => state.repositories
  },

  actions: {
    githubSearch ({commit, dispatch, rootState}, input) {
      let query = input.target.value
      let accessToken = rootState.auth.accessToken

      const search = new GitHub({token:accessToken}).search()

      search  ._request('GET', `https://api.github.com/search/repositories?type=all&sort=updated&per_page=10 &q=${query}`)
      .then(response => {
        commit('ADD_GITHUB_REPOSITORIES', response.data.items)
        let ids = response.data.items.map(data => data.id)
        dispatch('findProjectsByIds', ids)
      })
    }
  }

}
