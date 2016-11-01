<template>
  <div class="project-preview">
    <div class="project-header">
      <div class="project-name">
        <a :href="project.html_url" target="_blank" :title="project.full_name">{{project.name}}</a>
      </div>
      <div class="project-language">
        {{project.language}}
      </div>
      <div class="project-stargazers">
        {{project.stargazers_count}} ★
      </div>
      <div class="project-owner-avatar">
        <!-- TODO move to a separate component -->
        <div class="owner-profile">
          <img :src="project.owner.avatar_url" alt="Project owner avatar" :title="project.owner.login" />
        </div>
      </div>
    </div>
    <div class="project-body">
      <p>
        {{project.description}}
      </p>
    </div>
    <div class="metadata">
      <select v-model="tecnology.name">
        <option>Choose one</option>
        <option :value="tech.name" v-for="tech in techs" :disabled="!tech.active">{{tech.name}}</option>
      </select>
      <select v-model="tecnology.category" v-if="tecnology.name">
        <option>Choose one</option>
        <option :value="category" v-for="category in currentTecnology.categories">{{category}}</option>
      </select>
    </div>
    <div class="actions">
      <button type="button" name="button" @click="addProject">Add</button>
    </div>
  </div>
</template>

<script>
import {project as ProjectMapper} from 'src/helpers/store'
import { mapGetters } from 'vuex'

export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      tecnology: {
        name:'',
        category:''
      }
    }
  },
  computed: {
    ... mapGetters(['techs']),
    currentTecnology() {
      return this.techs.find((tech) => tech.name === this.tecnology.name)
    }
  },
  methods: {
    addProject () {
      ProjectMapper.create(this.project)
      .then(response => { console.log('Response', response )})
    }
  },
  components: {}
}
</script>

<style lang="stylus">
  .project-preview {
    display: flex
    min-height: 150px
    width: 80%
    flex-direction: column
    border: 1px solid rgb(168, 168, 168)
    margin-bottom: 30px
    padding: 10px
    cursor: pointer
    .project-header {
      display: flex
      flex-direction: row
      justify-content: space-between
      align-items: center
      .project-name {
        a {
          text-decoration: none
          color: rgb(134, 134, 134)
          &:visited {
            color: rgb(132, 5, 219)
          }
        }
      }
    }
    .project-body {
      display: flex
      margin: 20px 0 5px 0
    }
  }
  .project-info {
    display: flex
    flex-direction: row
  }
  .owner-profile {
    img {
      max-width: 40px
      max-height: 40px
      border-radius: 50%
    }
  }
</style>
