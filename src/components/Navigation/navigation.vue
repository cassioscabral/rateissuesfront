<template>
<nav class="navbar navbar-static-top">
  <ul class="nav navbar-nav">
      <router-link class="brand" tag="li" to="/" exact>
        <img alt="Brand" src="~assets/images/logo.png" height="20">
      </router-link>

      <router-link tag="li" to="/" exact>
        <a>Home</a>
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

      <li class="dropdown">
        <a v-show="!user" v-on:click="login">login</a>
        <img v-if="user" v-bind:src="user.photoURL" alt="user image" class="user-avatar" />
        <span v-if="user" class="user-name">{{user.displayName}}</span>
        <ul v-show="user" class="dropdown-list">
          <li>
            <a v-on:click="logout">logout</a>
          </li>
        </ul>
      </li>

  </ul>
</nav>
</template>

<script>
import auth from 'src/helpers/auth'
import store from 'src/helpers/authStore'
import Vuex from 'vuex'

export default {
  store: store,
  data () {
    return {}
  },
  created () {
    auth.load((data) => {this.user = data.user})
  },
  computed: {
    ... Vuex.mapGetters(['user'])
  },
  mounted () {},
  methods: {
    login(){
      auth.login()
    },
    logout(){
      auth.logout()
    }
  },
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
.dropdown {
  position:relative
  &:hover > ul {
  	display:block
  }
}
.dropdown-list {
  position:absolute;
  top:100%;
  display:none;
}
.user-avatar {
  width: 30px
  height: 30px
  padding-right: 5px
}
.user-name {
  padding-right: 10px
}
</style>
