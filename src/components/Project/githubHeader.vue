<template>
<div class="level media-content">
  <div class="level-left">
    <div class="media-left">
      <figure class="image is-32x32">
        <img :src="avatar" alt="User image">
      </figure>
    </div>
    <p class="title">
      <a target="_blank" :href="homepage || githubpage">{{name}}</a>
    </p>
  </div>

  <div class="level-right">
    <div class="level-item">
      <p class="title is-5">
        {{language}}
      </p>
    </div>
    <div class="level-item">
      <p class="title is-5">
        {{stargazersCount}} ★
      </p>
    </div>
    <div class="level-item">
      <i class="fa fa-check-circle" aria-hidden="true" v-show="isSaved"></i>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    isSaved: {
      type: Boolean
    },
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

<style lang="sass" scoped>
@import "~bulma/sass/utilities/variables";
.media-content {
  p {
    color: darken($primary, 10%) !important;
  }
}
</style>
