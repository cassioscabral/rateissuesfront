<template>
<div id="app">
  <navigation></navigation>
  <div class="container">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import Navigation from 'components/Navigation/navigation'

export default {
  components: {
    Navigation
  },
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>
