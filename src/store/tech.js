import {tech as TechMapper} from 'src/helpers/store'
import {ADD_TECHS} from './mutations.js'

export default {
  state: {
    techs: []
  },

  mutations:{
    [ADD_TECHS] (state, techs) {
      state.techs = techs
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
