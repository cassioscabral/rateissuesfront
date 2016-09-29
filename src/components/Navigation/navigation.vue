<template>
  <nav class="navbar navbar-inverse navbar-static-top">
      <div class="navbar-header">
          <a class="navbar-brand" v-link="{ path: '/', exact: true }">
              <img alt="Brand" src="~assets/images/logo.png" height="20">
          </a>
      </div>
      <ul class="nav navbar-nav">
          <li v-link-active>
              <a v-link="{ path: '/', exact: true }">Home</a>
          </li>
          <li v-link-active>
              <a v-link="{ path: '/posts' }">Posts</a>
          </li>
          <li v-link-active>
              <a v-link="{ path: '/add' }">Add</a>
          </li>
          <li v-link-active>
              <a v-link="{ path: '/search' }">Search</a>
          </li>
          <li v-link-active>
              <a v-link="{ path: '/explore' }">Explore</a>
          </li>
      </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  ready () {},
  methods: {},
  components: {}
}
</script>

<style lang="stylus">
</style>
