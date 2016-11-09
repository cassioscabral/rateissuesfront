<template>
<div class="container main-container">

<div>
  <h1 class="title has-text-centered">Add a project</h1>
  <input class="input" type="text" placeholder="rateissues" @change="githubSearch">
</div>

<div class="container main-container">
  <h1 class="title has-text-centered" v-show="repositories.length > 0">Results</h1>
  <div class="columns is-multiline" v-for="result in repositories">
    <project-preview
    class="column is-8 is-offset-2"
    :project="result" />
  </div>
</div>

</div>
</template>

<script>
import ProjectPreview from 'src/components/Project/projectPreview2'
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
