<template>
  <card
    :col-size="10"
    :body="project.description">
    <div slot="header" class="project-header">
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
        <avatar size="sm" :src="project.owner.avatar_url"></avatar>
      </div>
    </div>
    <div class="project-footer" slot="footer">
      <div class="metadata">
        <select v-model="currentTech">
          <option>Choose one</option>
          <option :value="tech" v-for="tech in techs" :disabled="!tech.active">{{tech.name}}</option>
        </select>
        <select v-model="currentTech.category" v-if="currentTech.name">
          <option>Choose one</option>
          <option :value="category" v-for="category in currentTech.categories">{{category}}</option>
        </select>
      </div>
      <div class="actions">
        <button type="button" name="button" @click="addProject">Add</button>
      </div>
    </div>
  </card>
</template>

<script>
import Card from 'src/components/Shared/card'
import Avatar from 'src/components/Shared/avatar'
import {project as ProjectMapper} from 'src/helpers/store'
import { mapGetters } from 'vuex'

export default {
  name: 'ProjectPreview',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      currentTech: {}
    }
  },
  computed: {
    ... mapGetters(['techs'])
  },
  methods: {
    addProject () {
      ProjectMapper.create({
        ... this.project,
        tech: this.currentTech
      })
    }
  },
  components: {
    Card,
    Avatar
  }
}
</script>

<style lang="stylus">
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
</style>
