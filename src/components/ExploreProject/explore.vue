<template>
<div>
  <h1>Explore for projects</h1>

  <div class="all-projects">
    <div class="project" v-for="project in projects">
      Project Name {{project.name}} | Project obj: {{project.project}}
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
import {project as ProjectMapper} from 'src/helpers/store'

export default {
  data () {
    return {
      projects: []
    }
  },
  created () {
  },
  beforeRouteEnter (to, from, next) {
    ProjectMapper.findAll(projects => {
      console.log('All Projects', projects);
      next(vm => {
        vm.projects = projects
      })
    })

  },
  computed: {},
  methods: {},
  components: {}
}
</script>

<style>
</style>
