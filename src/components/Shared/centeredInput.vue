<template>
  <div class="container has-text-centered">
    <h1 class="title">
      {{title}}
    </h1>
    <h2 class="subtitle">
      <input
      class="input"
      type="text"
      :placeholder="inputPlaceholder"
      @change="inputHandler">
    </h2>
  </div>
</template>

<script>
export default {
  name: 'centeredInput',
  props: {
    title: {
      type: String
    },
    inputPlaceholder: {
      type: String
    },
    inputHandler: {
      type: Function,
      required: true
    }
  },
  data () {
    return {}
  },
  created () {
  }
}
</script>

<style lang="sass" scoped>
.input {
  width: 40%;
  margin: 6rem;
  font-size: 1.6rem;
  text-align: center;
  height: 3rem;
}
</style>
