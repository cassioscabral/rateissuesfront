import {tech as TechMapper} from 'src/helpers/store'
import {ADD_TECHS, REMOVE_TECHS} from './mutations.js'

export default {
  state: {
    techs: []
  },

  mutations:{
    [ADD_TECHS] (state, techs) {
      state.techs = techs
    },
    [REMOVE_TECHS] (state) {
      state.techs = []
    }
  },

  getters: {
    techs: (state) => state.techs
  },

  actions: {
    findTechs ({commit}) {
      TechMapper.findAll().then(techs => {
        commit(ADD_TECHS, techs)
      })
    }
  }

}
