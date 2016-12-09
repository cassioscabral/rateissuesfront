<template>
  <div class="container" v-if="hasProject">
    <div class="columns">
      <div class="column is-4">
        <p class="content">
          <h2>Project: {{project.githubData.name}}</h2>
        </p>

        <p class="content">
          <figure class="image is-128x128">
            <img :src="project.githubData.owner.avatar_url">
          </figure>
        </p>

        <p class="content">
          Full Name: {{project.githubData.full_name}}
        </p>

        <p class="content">
          Description: {{project.githubData.description}}
        </p>
      </div>
      <div class="column is-4">
        <p class="content">
          <h2>Second Column</h2>
        </p>
      </div>
      <div class="column is-4">
        <p class="content">
          <h2>Third Column</h2>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import store from 'src/helpers/store'
import {isEmpty} from 'lodash'

export default {
  name: 'ProjectAbout',
  async beforeRouteEnter (to, from, next) {
    try {
      let project = await store.find('project', to.params.id)
      next(vm => {
        vm.project = project
      })
    } catch (e) {
      console.error(e)
    }
  },
  props: {
  },
  data () {
    return {
      project: null
    }
  },
  computed: {
    hasProject () {
      return !isEmpty(this.project)
    }
  },
  components: {
  }
}
</script>

<style lang="sass">
</style>
