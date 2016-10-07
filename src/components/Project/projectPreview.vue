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
          <img :src="project.owner.avatar_url" alt="" />
        </div>
      </div>
    </div>
    <div class="project-body">
      <p>
        {{project.description}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {},
  methods: {},
  components: {}
}
</script>

<style lang="stylus">
  .project-preview {
    display: flex
    min-height: 150px
    width: 100%
    flex-direction: column
    border: 1px solid rgb(168, 168, 168)
    margin-bottom: 30px
    padding: 10px
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
