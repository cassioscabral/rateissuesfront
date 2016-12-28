<template>
<div class="container main-container">

  <centered-input
    title="Explore"
    :input-handler="findProjects"
    input-placeholder="Search projects">
  </centered-input>

  <div class="container main-container projects">
    <h1 class="title has-text-centered">Projects</h1>
    <div class="columns is-multiline">
      <div class="column" v-for="project in projects">
        <card
          class="card"
          :title="project.githubData.name"
          :meta="project.githubData.full_name"
          :body="project.githubData.description">

          <ProjectHeader
            slot="header"
            :project="project"/>
        </card>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Card from 'src/components/Shared/card'
import ProjectHeader from 'src/components/Project/projectHeader'
import CenteredInput from 'src/components/Shared/centeredInput'

export default {
  name: 'explorePage',
  data () {
    return {}
  },
  created () {
    this.findProjects()
  },
  computed: {
    ...mapGetters(['projects'])
  },
  methods: {
    ...mapActions(['findProjects'])
  },
  components: {
    Card,
    ProjectHeader,
    CenteredInput
  }
}
</script>

<style lang="sass" scoped>
@import "~bulma/sass/utilities/variables";
.projects {
  .title {
    margin-bottom: 2.2rem;
  }
}
.card {
  margin: 0 auto;
}
</style>
