<template>
  <div class="container" v-if="hasProject">
    Project About
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
  }
}
</script>

<style lang="sass">
</style>
