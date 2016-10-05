<template>
<div>
    <div class="page-header">
        <h1>{{post.title}}</h1>
    </div>

    <p>{{post.body}}</p>

    <router-link to="/posts">
      <a>&laquo; Back to posts</a>
    </router-link>
</div>
</template>

<script>
import Vue from 'vue'
import {postsResource} from 'src/helpers/resources'

export default Vue.extend({
  data () {
    return {
      post: {}
    }
  },

  route: {
    data () {
      const id = this.$route.params.id
      return postsResource.get({id}).then((response) => {
        return this.$set('post', response.data)
      }, (errorResponse) => {
        // Handle error...
        console.log('API responded with:', errorResponse.status)
      })
    }
  }
  
})

</script>

<style>
</style>
