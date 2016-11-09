<template>
<div class="level">
  <div class="media level-item has-text-centered">
    <div class="media-left">
      <figure class="image is-32x32">
        <img :src="avatar" alt="User image">
      </figure>
    </div>
    <div class="media-content">
      <p class="title">
        <a target="_blank" :href="homepage || githubpage">{{name}}</a>
      </p>
    </div>
  </div>
  <div class="level-item has-text-centered">

  </div>
  <div class="level-item has-text-centered">
    <p class="title is-5">
      {{language}}
    </p>
  </div>
  <div class="level-item has-text-centered">
    <p class="title is-5">
      {{stargazersCount}} ★
    </p>
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
    language: {
      type: String
    },
    stargazersCount: {
      type: Number
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
