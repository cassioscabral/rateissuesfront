<template>
<div>
  <h1>Explore for projects</h1>

  <div class="all-projects">
    <div class="project" v-for="project in projects">
      Project Name {{project.name}}
    </div>
  </div>

  <div class="filters">
    Filters
  </div>

  <section class="trending-section">
    <h4>Trending</h4>
  </section>

  <section class="recent-section">
    <h4>Recent</h4>
  </section>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  created () {
    this.findProjects()
  },
  computed: {
    ... mapGetters(['projects'])
  },
  methods: {
    ... mapActions(['findProjects'])
  },
  components: {}
}
</script>

<style>
</style>
