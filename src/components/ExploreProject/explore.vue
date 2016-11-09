<template>
<div class="container main-container">

<div class="">
  <h1 class="title has-text-centered">Search for projects</h1>
  <input class="input" type="text" placeholder="Name of project" @change="findProjects">
</div>

<div class="container main-container">
  <h1 class="title has-text-centered">Project results</h1>
  <div class="columns is-multiline">
    <div class="column" v-for="project in projects">
      <card
      :title="project.name"
      :meta="project.full_name"
      :body="project.description">

      <ProjectHeader
      slot="header"
      :avatar="project.owner.avatar_url"
      :homepage="project.homepage"
      :githubpage="project.html_url"
      :name="project.name"
      :userName="project.owner.login" />
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
    ProjectHeader
  }
}
</script>

<style lang="stylus" scoped>
</style>
