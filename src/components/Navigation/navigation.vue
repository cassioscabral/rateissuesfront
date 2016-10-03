<template>
<nav class="navbar navbar-static-top">
  <ul class="nav navbar-nav">
      <router-link class="brand" tag="li" to="/" exact>
        <img alt="Brand" src="~assets/images/logo.png" height="20">
      </router-link>

      <router-link tag="li" to="/" exact>
        <a>Home</a>
      </router-link>

      <router-link tag="li" to="/posts">
        <a>Posts</a>
      </router-link>

      <router-link tag="li" to="/add">
        <a>Add</a>
      </router-link>

      <router-link tag="li" to="/search">
        <a>Search</a>
      </router-link>

      <router-link tag="li" to="/explore">
        <a>Explore</a>
      </router-link>

  </ul>
</nav>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="stylus" scoped>
nav {
  display: flex
  width: 100%
  justify-content: center
  align-items: center
}
.brand {
  padding-right: 10%
}
ul {
  display: flex
  width: 100%
  justify-content: space-between
  align-items: center
  flex-direction: row
  background: rgb(68, 54, 134)
  li {
    display: flex
    min-width: 100px
    min-height: 30px
    text-transform: uppercase
    justify-content: center
    align-items: center
    &.active {
      background: rgb(65, 6, 139)
      a {
        color: rgb(242, 242, 242)
      }
    }
    a {
      display: flex
      color: rgb(190, 190, 190)
      text-decoration: none
    }
  }
}
</style>
