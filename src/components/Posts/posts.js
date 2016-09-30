import Vue from 'vue'
import {db} from 'src/helpers/firebase'

import template from './posts.html'

export default Vue.extend({
  template,

  data () {
    return {
      posts:[]
    }
  },

  route: {
    data () {
      this.$bindAsArray('posts', db.ref('posts'))
    }
  }
})
