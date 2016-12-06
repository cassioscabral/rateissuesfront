<template>
<div class="media">
  <div class="media-left">
    <figure class="image is-32x32">
      <img :src="avatar" alt="User image">
    </figure>
  </div>
  <div class="media-content">
    <p class="title is-5">
      <!-- <strong><a :href="homepage || githubpage">{{name}}</a></strong> -->
      <strong>
        <router-link :to="{ name: 'project', params: { id: project.githubData.id }}">{{name}}
        </router-link>
      </strong>
    </p>
    <p class="subtitle is-6">{{userName}}</p>
  </div>
</div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data () {
    let gh = this.project.githubData
    return {
      avatar: gh.owner.avatar_url,
      homepage: gh.homepage,
      githubpage: gh.html_url,
      name: gh.name,
      userName: gh.owner.login
    }
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
