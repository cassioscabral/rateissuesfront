<template>
<div>
    <div class="page-header">
        <h1>Posts
          <small class="pull-right">
            <router-link to="/">
              <a>Back to home</a>
            </router-link>
          </small>
        </h1>
    </div>

    <router-link
      class="list-group"
      v-for="post in posts"
      tag="div"
      :to="/{ name: 'post', params: { id: post.id }}">
      <a class="list-group-item">{{post.title}}</a>
    </router-link>
    </div>
</div>
</template>

<script>
import Vue from 'vue'

import {postsResource} from 'src/helpers/resources'

export default Vue.extend({

  data () {
    return {
      posts: []
    }
  },

  route: {
    data (){
      return postsResource.get().then((response) => {
        return this.$set('posts', response.data)
      }, (errorResponse) => {
        // Handle error...
        console.log('API responded with:', errorResponse.status)
      })
    }
  }
})
</script>

<style lang="css">
</style>
