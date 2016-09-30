<template>
  <div class="add-component">
    <h1>Add a project</h1>
    <div class="control">
      <input type="text" placeholder="Find a project">
    </div>
    <div class="results">
      <h3>Results</h3>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  ready () {},
  methods: {},
  components: {}
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
  display: flex
  flex-direction: column
}
</style>
