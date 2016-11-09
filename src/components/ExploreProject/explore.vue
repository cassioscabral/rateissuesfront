<template>
<div class="container main-container">

  <div class="container has-text-centered">
    <h1 class="title">
      Explore
    </h1>
    <h2 class="subtitle">
      <input class="input" type="text" placeholder="Search projects" @change="findProjects">
    </h2>
  </div>

  <div class="container main-container projects">
    <h1 class="title has-text-centered">Project results</h1>
    <div class="columns is-multiline">
      <div class="column" v-for="project in projects">
        <card
          :title="project.name"
          :meta="project.full_name"
          :body="project.description">

          <ProjectHeader
            slot="header"
            :avatar="project.owner.avatar_url"
            :homepage="project.homepage"
            :githubpage="project.html_url"
            :name="project.name"
            :userName="project.owner.login" />
        </card>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Card from 'src/components/Shared/card'
import ProjectHeader from 'src/components/Project/projectHeader'

export default {
  name: 'explorePage',
  data () {
    return {}
  },
  created () {
    this.findProjects()
  },
  computed: {
    ... mapGetters(['projects'])
  },
  methods: {
    ... mapActions(['findProjects'])
  },
  components: {
    Card,
    ProjectHeader
  }
}
</script>

<style lang="sass" scoped>
@import "~bulma/sass/utilities/variables";
.projects {
  .title {
    margin-bottom: 2.2rem;
  }
}
.input {
  $primary-color: #4a6540;
  $placeholder-color: darken($primary-color, 10%);
  width: 40%;
  background-color: rgba(255, 255, 255, 0.4);
  color: $primary-color;
  margin: 6rem;
  font-size: 1.6rem;
  text-align: center;
  height: 3rem;

  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: $placeholder-color;
  }
  &::-moz-placeholder { /* Firefox 19+ */
    color: $placeholder-color;
  }
  &:-ms-input-placeholder { /* IE 10+ */
    color: $placeholder-color;
  }
  &:-moz-placeholder { /* Firefox 18- */
    color: $placeholder-color;
  }
  &:-moz-placeholder { /* Firefox 18- */
    color: $placeholder-color;
  }
}
</style>
