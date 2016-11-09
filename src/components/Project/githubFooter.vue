<template>
<div class="level">
  <div class="level-item has-text-centered">
    <span class="select">
     <select v-model="currentTech.tech">
       <option>Choose one</option>
       <option :value="tech" v-for="tech in techs" :disabled="!tech.active">{{tech.name}}</option>
     </select>
   </span>
  </div>

  <div class="level-item has-text-centered">
    <span class="select">
      <select v-model="currentTech.category" :class="{'is-disabled':!currentTech.tech.name}">
        <option>Choose one</option>
        <option :value="category" v-for="category in currentTech.tech.categories">{{category}}</option>
      </select>
    </span>
  </div>

  <div class="level-item has-text-centered">
    <button
      class="button is-primary"
      type="button"
      @click="addProject"
      :class="{'is-disabled':currentTech.category === 'Choose one' || !currentTech.category}">
      Add
    </button>
  </div>
</div>
</template>

<script>
import {project as ProjectMapper} from 'src/helpers/store'

export default {
  props: {
    techs: {
      type: Array,
      required: true
    },
    project: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      currentTech: {
        tech:{},
        category: ''
      }
    }
  },
  computed: {},
  methods: {
    addProject () {
      let tech = {}
      ProjectMapper.create({
        ... this.project,
        tech: Object.assign(this.currentTech.tech, {category:this.currentTech.category})
      })
    }
  },
  components: {}
}
</script>

<style lang="stylus" scoped>
</style>
