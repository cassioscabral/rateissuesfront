<template>
<div class="level">
  <div class="level-item has-text-centered">
    <span class="select">
     <select v-model="tech">
       <option :value="{}">Choose one</option>
       <option
          v-for="tech in techs"
          :value="tech"
          :disabled="!tech.active">
          {{tech.name}}
        </option>
     </select>
   </span>
  </div>

  <div class="level-item has-text-centered" v-show="hasTechSelected">
    <span class="select">
      <select
        v-model="category"
        :class="{'is-disabled': !hasTechSelected}">
        <!-- empty string will reset the category -->
        <option :value="''">Choose one</option>
        <option
          v-for="category in tech.categories"
          :value="category">
          {{category}}
        </option>
      </select>
    </span>
  </div>

  <div class="level-item has-text-centered">
    <button
      class="button is-primary"
      type="button"
      @click="addProject"
      :class="{'is-disabled': !category}">
      Add
    </button>
  </div>
</div>
</template>

<script>
import {project as ProjectMapper} from 'src/helpers/store'
import {isEmpty} from 'lodash'

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
      tech:{},
      category: ''
    }
  },
  computed: {
    hasTechSelected () {
      return !isEmpty(this.tech)
    }
  },
  methods: {
    addProject () {
      ProjectMapper.create({
        ...this.project,
        tech: {category: this.category, name: this.tech.name}
      })
    }
  },
  components: {}
}
</script>
