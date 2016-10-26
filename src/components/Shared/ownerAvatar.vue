<template>
  <div class="owner-avatar">
    <img :src="imgSrc" alt="Project owner avatar" :title="imgTitle" />
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    imgTitle: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {},
  components: {}
}
</script>

<style lang="stylus">
.owner-avatar {
  img {
    max-width: 40px
    max-height: 40px
    border-radius: 50%
  }
}
</style>
