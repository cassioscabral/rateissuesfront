<template>
<div class="container main-container">

<centered-input
  title="Add a project"
  :input-handler="githubSearch"
  input-placeholder="rateissues">
</centered-input>

<div class="container main-container">
  <h1 class="title has-text-centered" v-show="repositories.length > 0">Results</h1>
  <div class="columns" v-for="result in repositories">
    <div class="column is-8 is-offset-2">
      <project-preview
      class="is-fullwidth"
      :isSaved="!!projectsFilteredById.data[result.id]"
      :project="result" />
    </div>
  </div>
</div>

</div>
</template>

<script>
import ProjectPreview from 'src/components/Project/projectPreview'
import { mapActions, mapGetters } from 'vuex'
import CenteredInput from 'src/components/Shared/centeredInput'

export default {
  data () {
    return {}
  },
  created () {
    this.findTechs()
  },
  computed: {
    ...mapGetters(['repositories','projectsFilteredById']),
  },
  methods: {
    ...mapActions(['githubSearch', 'findTechs'])
  },
  components: {
    ProjectPreview,
    CenteredInput
  }
}
</script>

<style lang="stylus" scoped>
</style>
