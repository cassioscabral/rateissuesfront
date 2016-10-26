<template>
<div class="explore">

  <div class="cards all-projects">
    <card
      v-for="project in projects"
      :header="project.name"
      :body="project.description"
      :footer="project.language"
      :header-image="project.owner.avatar_url">
    </card>
  </div>

  <!-- <div class="filters">
    Filters
  </div>

  <section class="trending-section">
    <h4>Trending</h4>
  </section>

  <section class="recent-section">
    <h4>Recent</h4>
  </section> -->
</div>
</template>

<script>
import {project as ProjectMapper} from 'src/helpers/store'
import Card from 'src/components/Shared/card'

export default {
  data () {
    return {
      projects: []
    }
  },
  created () {
  },
  beforeRouteEnter (to, from, next) {
    ProjectMapper.findAll().then(projects => {
      console.log('All Projects', projects);
      next(vm => {
        // project === {..., project: {name, description, ...}}
        vm.projects = projects.map(p => p.project)
      })
    })

  },
  computed: {},
  methods: {},
  components: {
    Card
  }
}
</script>

<style lang="stylus" scoped>
.explore {
  padding: 20px 0
}
.cards {
  display: flex
  justify-content: space-around
  align-items: center
}
</style>
