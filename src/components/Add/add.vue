<template>
<div class="container main-container">

<div>
  <h1 class="title has-text-centered">Add a project</h1>
  <input class="input" type="text" placeholder="rateissues" @change="githubSearch">
</div>

<div class="container main-container">
  <h1 class="title has-text-centered" v-show="repositories.length > 0">Results</h1>
  <div class="columns" v-for="result in repositories">
    <div class="column is-8 is-offset-2">
      <project-preview
      class="is-fullwidth"
      :project="result" />
    </div>
  </div>
</div>

</div>
</template>

<script>
import ProjectPreview from 'src/components/Project/projectPreview'
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  created () {
    this.findTechs()
  },
  computed: {
    ... mapGetters(['repositories','projectsFilteredById']),
  },
  methods: {
    ... mapActions(['githubSearch', 'findTechs'])
  },
  components: {
    ProjectPreview
  }
}
</script>

<style lang="stylus" scoped>
</style>
