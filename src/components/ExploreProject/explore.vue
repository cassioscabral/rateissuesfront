<template>
<div class="explore columns centered">
  <div class="column col-12">

    <div class="search-section text-center">
      <h1>Search for projects</h1>

      <input type="text" @change="findProjects">

      <div class="refine-search">
        Refine
      </div>
      <div class="projects">
        Project results
      </div>
    </div>

    <div class="columns cards all-projects">
      <card
        v-for="project in projects"
        :col-size="3"
        :title="project.name"
        :meta="project.full_name"
        :body="project.description">
          <avatar slot="avatar" size="sm" :src="project.owner.avatar_url"></avatar>
      </card>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Card from 'src/components/Shared/card'
import Avatar from 'src/components/Shared/avatar'

export default {
  name: 'explorePage',
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
  components: {
    Card,
    Avatar
  }
}
</script>

<style lang="stylus" scoped>
.cards {
  flex-wrap: wrap
}
</style>
