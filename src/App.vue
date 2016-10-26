<template>
<div id="app">
  <navigation></navigation>
  <div class="container">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import 'src/assets/utilities.scss'
import Navigation from 'components/Navigation/navigation'
import { mapActions } from 'vuex'
import Store from 'src/store/index'

export default {
  store: Store,
  components: {
    Navigation
  },
  created () {
    this.authLoad()
  },
  data () {
    return {}
  },
  computed: {},
  methods: {
    ... mapActions(['authLoad'])
  }
}
</script>

<style>
@import 'reset.css';
@import 'https://fonts.googleapis.com/css?family=Oswald';

html, body {
  height: 100%;
}
body {
  font-family: 'Oswald', sans-serif;
  height: 100%;
  background: #f7f7f7;
}
</style>
