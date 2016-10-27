<template>
<div class="explore">
  <div>
    <h1>Search for projects</h1>

    <input type="text" @change="findProjects">

    <div class="refine-search">
      Refine
    </div>
    <div class="projects">
      Project results
    </div>
  </div>

  <div class="cards all-projects">
    <card
      v-for="project in githubProjects"
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
import { mapActions, mapGetters } from 'vuex'
import Card from 'src/components/Shared/card'

export default {
  data () {
    return {}
  },
  created () {
    this.findProjects()
  },
  computed: {
    ... mapGetters(['projects']),
    githubProjects () {
      return this.projects.map(p => p.project)
    }
  },
  methods: {
    ... mapActions(['findProjects'])
  },
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
