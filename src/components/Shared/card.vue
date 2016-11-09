<template>
<div class="card">
  <div class="card-content">
    <slot name="header">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">{{title}}</p>
          <p class="subtitle is-6">{{meta}}</p>
        </div>
      </div>
    </slot>
    <div class="content">
      {{body}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    meta: {
      type: String
    },
    body: {
      type: String
<<<<<<< HEAD
    },
    image: {
      type: String
=======
>>>>>>> origin
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

<style lang="stylus" scoped>
</style>
