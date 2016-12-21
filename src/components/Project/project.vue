<template>
<div class="project container" v-if="hasProject">
  <div class="columns is-multiline">

    <div class="column is-12 project-info">
      <div class="columns">
        <div class="column is-2 project-avatar">
          AVATAR
        </div>
        <div class="column is-5 extra-info-1">
          EXTRA INFO 1
        </div>
        <div class="column is-5 extra-info-2">
          EXTRA INFO 2
        </div>
      </div>
    </div>

    <div class="column is-12 project-stats">
      STATS
    </div>
    <div class="column is-12 project-community">
      <div class="columns">
        <div class="column is-6">
          POLLS
        </div>
        <div class="column is-6">
          Q.A / F.A.Q.
        </div>
      </div>
    </div>
    <div class="column is-12 project-issues">
      <h3>Issues</h3>
      <div class="columns">
        <div class="column is-3">
          Unknown
        </div>
        <div class="column is-3">
          EASY
        </div>
        <div class="column is-3">
          MEDIUM
        </div>
        <div class="column is-3">
          HARD
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import store from 'src/helpers/store'
import {isEmpty} from 'lodash'

export default {
  name: 'ProjectPage',
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
  methods: {},
  components: {
  }
}
</script>

<style>
</style>
