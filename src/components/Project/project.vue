<template>
<div class="project container">
  <h1 class="heading">Project Page</h1>
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

export default {
  name: 'ProjectPage',
  async beforeRouteEnter (to, from, next) {
    try {
      let project = await store.find('project', to.params.id)
      console.log('project', project)
      next(vm => {
        vm.project = project
      })
    } catch (e) {
      console.error(e)
    }
  },
  data () {
    return {
      project: {}
    }
  },
  computed: {},
  methods: {},
  components: {
  }
}
</script>

<style>
</style>
