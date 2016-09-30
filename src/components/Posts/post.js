import Vue from 'vue'
import {db} from 'src/helpers/firebase'

import template from './post.html'

export default Vue.extend({
  template,

  data () {
    return {
      post: {}
    }
  },

  route: {
    data () {
      const id = this.$route.params.id
      this.$bindAsObject('post', db.ref(`posts/${id}`))
    }
  }
})
