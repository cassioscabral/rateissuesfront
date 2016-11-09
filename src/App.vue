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

<style lang="sass">
@import '~bulma/sass/utilities/functions.sass';
@import '~bulma/sass/utilities/variables.sass';
@import '~bulma/sass/utilities/mixins.sass';
@import '~bulma/sass/utilities/controls.sass';
// bulma override
// $body-background: black;

@import '~bulma/sass/base/_all';
@import '~bulma/sass/elements/_all';
@import '~bulma/sass/components/_all';
@import '~bulma/sass/grid/_all';
@import '~bulma/sass/layout/_all';
</style>

<style>
@import 'reset.css';

html, body {
  height: 100%;
}
body {
  height: 100%;
}

.main-container{
  margin-top: 50px;
}
</style>
