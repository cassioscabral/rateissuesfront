import Vue from 'vue'
import {db} from 'src/helpers/firebase'

import template from './add.html'

export default Vue.extend({
  template,

  data () {
    return {
      title: null,
      body: null
    }
  },

  firebase: {
    posts: db.ref('posts')
  },

  route: {
    data () {
    }
  },

  methods: {
    addPost (title, body) {
      this.$firebaseRefs.posts.push({
        title,
        body
      })
      this.title = null
      this.body = null
    }
  }
})
