<template>
<div class="add-component">
  <h1>Add a project</h1>
  <div class="control">
    <input type="text"
      placeholder="rateissues"
      @change="githubSearch">
  </div>
  <div class="results">
    <h2 v-show="repositories.length > 0">Results</h2>
    <project-preview
      class="result-item"
      v-for="result in repositories"
      :project="result">

    </project-preview>
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
    ... mapGetters(['repositories']),
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

.add-component {
  display: flex
  justify-content: center
  align-items: center
  text-align: center
  flex-direction: column
}
h1 {
  display: flex
  font-size: 3rem
  margin: 2rem 0
}
.control {
  display: flex
  input {
    font-size: 2rem
  }
}

.results {
  width: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  h2 {
    margin: 15px 0
  }
}
</style>
