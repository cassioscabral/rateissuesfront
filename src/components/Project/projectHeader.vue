<template>
<div class="media">
  <div class="media-left">
    <figure class="image is-32x32">
      <img :src="avatar" alt="User image">
    </figure>
  </div>
  <div class="media-content">
    <p class="title is-5">
      <a :href="homepage || githubpage">{{name}}</a>
    </p>
    <p class="subtitle is-6">{{userName}}</p>
  </div>
</div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String
    },
    homepage: {
      type: String
    },
    githubpage: {
      type: String
    },
    name: {
      type: String
    },
    userName: {
      type: String
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {},
  components: {}
}
</script>

<style lang="stylus" scoped>
</style>
