<template>
<div class="hero-head">
  <header class="nav">
    <div class="container">
      <div class="nav-left">
        <router-link class="nav-item is-brand" to="/" exact>
          <img alt="Brand" src="~assets/images/logo.png">
        </router-link>
      </div>
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu">
        <router-link class="nav-item" to="/add">
          <a>Add</a>
        </router-link>
        <router-link class="nav-item" to="/explore">
          <a>Explore</a>
        </router-link>
        <span class="nav-item">
          <a v-show="!hasUser" class="button is-primary" @click="login">login</a>
          <a class="nav-item" v-show="hasUser">
            <img :src="currentUser.photoURL" alt="user image" class="user-image"/>
            <span>{{currentUser.displayName}}</span>
          </a>
          <a v-show="hasUser" class="button is-light is-outlined" @click="logout">logout</a>
        </span>
      </div>
    </div>
  </header>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  created () {},
  computed: {
    ... mapGetters(['currentUser']),
    hasUser () {
      return Object.keys(this.currentUser).length > 0
    }
  },
  mounted () {},
  methods: {
    ... mapActions(['logout', 'login'])
  },
  components: {}
}
</script>

<style lang="stylus" scoped>
.user-image{
  margin-right: 5px;
  border-radius: 50%;
}
</style>
