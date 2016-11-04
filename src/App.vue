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
  name: 'App',
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

<style lang="less">
// spectre override
@import '~spectre/spectre.less';
// @core-color: #5764c6;
// @body-font-color: hotpink;

</style>

<style>
@import 'reset.css';

html, body {
  height: 100%;
}
body {
  height: 100%;
}
</style>
