<template>
<div class="project container" v-if="hasProject">
  <h1 class="heading">{{project.githubData.name}}</h1>
  <div class="tabs">
    <ul>
      <li><router-link :to="{ path: 'about' }" append>About</router-link></li>
      <li><a>F.A.Q.</a></li>
      <li><a>Q & A</a></li>
      <li><a>Issues</a></li>
    </ul>
  </div>
  <!-- Sub components will render here  -->
  <router-view></router-view>
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
