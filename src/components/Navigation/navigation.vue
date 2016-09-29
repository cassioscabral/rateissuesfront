<template>
<nav class="navbar navbar-static-top">
  <ul class="nav navbar-nav">
      <li class="brand">
        <a v-link="{ path: '/', exact: true }">
            <img alt="Brand" src="~assets/images/logo.png" height="20">
        </a>
      </li>
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
