<template>
<card
  :title="project.name"
  :meta="project.full_name"
  :body="project.description">

  <GithubtHeader
    slot="header"
    :avatar="project.owner.avatar_url"
    :homepage="project.homepage"
    :githubpage="project.html_url"
    :name="project.full_name"
    :language="project.language"
    :stargazersCount="project.stargazers_count"/>

  <GithubtFooter
    slot="footer"
    v-show="!isSaved"
    :techs="techs"
    :project="project"/>
</card>
</template>

<script>
import Card from 'src/components/Shared/card'
import GithubtHeader from 'src/components/Project/githubHeader'
import GithubtFooter from 'src/components/Project/githubFooter'
import { mapGetters } from 'vuex'

export default {
  name: 'ProjectPreview',
  props: {
    isSaved: {
      type: Boolean
    },
    project: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
    ... mapGetters(['techs'])
  },
  methods: {},
  components: {
    Card,
    GithubtHeader,
    GithubtFooter
  }
}
</script>

<style lang="stylus">
</style>
