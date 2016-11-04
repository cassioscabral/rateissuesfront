<template>
  <figure :class="['avatar', `avatar-${size}`]"
    :data-initial="initials"
    :style="`background-color: ${bgColor};`">
      <img :src="src" />
  </figure>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
      required: true
    },
    initials: {
      type: String,
      default () {
        return ''
      }
    },
    bgColor: {
      type: String,
      default () {
        return '#5764c6'
      }
    },
    size: {
      type: String, // xl | ls | sm | xs
      default () {
        return 'xl'
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
</style>
