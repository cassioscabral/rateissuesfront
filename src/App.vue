<template>
<section id="app" class="hero is-primary is-medium is-bold">
  <!-- Hero header: will stick at the top -->
  <navigation></navigation>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
      <router-view></router-view>
    </div>
  </div>

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot">
    <nav class="tabs">
      <div class="container">
        <ul>
          <li class="is-active"><a>Overview</a></li>
          <li><a>About</a></li>
          <li><a>Github</a></li>
          <li><a>FAQ</a></li>
          <li><a>Want to help?</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
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
