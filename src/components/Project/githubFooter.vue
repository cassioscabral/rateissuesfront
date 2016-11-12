<template>
<div class="level">
  <div class="level-item has-text-centered">
    <span class="select">
     <select v-model="tech">
       <option :value="{}">Tech</option>
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
        <option :value="''">Category</option>
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
      :class="{
        'is-disabled': !category,
        'is-loading': projectIsFetching
      }"
      type="button"
      @click="submitProject">
      Add
    </button>
  </div>
</div>
</template>

<script>
import {project as ProjectMapper} from 'src/helpers/store'
import { mapActions, mapGetters } from 'vuex'
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
    ...mapGetters(['projectsFetching']),
    hasTechSelected () {
      return !isEmpty(this.tech)
    },
    projectIsFetching () {
      return this.projectsFetching[this.project.id] || false
    }
  },
  methods: {
    ...mapActions(['addProject']),
    submitProject () {
      this.addProject(
        // new project
        {
          ...this.project,
          tech: {category: this.category, name: this.tech.name}
        }
      )

    }
  },
  components: {}
}
</script>
