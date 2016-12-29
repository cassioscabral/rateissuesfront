<template>
<div id="app">
  <navigation></navigation>

  <router-view></router-view>

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

<style lang="sass">
// $body-background: black;
// @import "~bulma/sass/utilities/variables";
// @import '~bulma/sass/utilities/functions.sass';
// @import '~bulma/sass/utilities/variables.sass';
// @import '~bulma/sass/utilities/mixins.sass';
// @import '~bulma/sass/utilities/controls.sass';
@import '~bulma';
@import '~hint.css';
@import '~font-awesome/css/font-awesome.min.css'
</style>

<style>
html, body {
  height: 100%;
}
body {
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
.hero {
  min-height: 100%;
}
.main-container{
  margin-top: 50px;
}
</style>
