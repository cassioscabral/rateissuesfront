<template>
  <div class="card f-column clickable">
    <header>
      {{header}}
      <avatar v-if="headerImage" :img-src="headerImage"></avatar>
    </header>
    <div class="body">
      {{body}}
    </div>
    <footer>
      {{footer}}
    </footer>
  </div>
</template>

<script>
import Avatar from 'src/components/Shared/ownerAvatar'

export default {
  props: ['header', 'body', 'footer', 'headerImage'],
  data () {
    return {}
  },
  computed: {},
  methods: {},
  components: {
    Avatar
  }
}
</script>

<style lang="stylus" scoped>
.card {
  * {
    display: flex
  }
  display: flex
  min-width: 150px
  min-height: 100px
  border: 1px solid black
  justify-content: space-between
  padding: 10px
  background: white
  header {
    padding: 5px 0
    font-weight: 600
    font-size: 1.4rem
    justify-content: space-between
    align-items: center
  }
  .body {
    margin: 10px 0
    padding: 20px 0
  }
  footer {
    justify-content: flex-end
  }
}
</style>
