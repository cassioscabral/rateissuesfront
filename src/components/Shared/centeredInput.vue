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
  $primary-color: white;
  $placeholder-color: darken($primary-color, 10%);
  width: 40%;
  background-color: rgba(255, 255, 255, 0.4);
  color: $primary-color;
  margin: 6rem;
  font-size: 1.6rem;
  text-align: center;
  height: 3rem;

  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: $placeholder-color;
  }
  &::-moz-placeholder { /* Firefox 19+ */
    color: $placeholder-color;
  }
  &:-ms-input-placeholder { /* IE 10+ */
    color: $placeholder-color;
  }
  &:-moz-placeholder { /* Firefox 18- */
    color: $placeholder-color;
  }
  &:-moz-placeholder { /* Firefox 18- */
    color: $placeholder-color;
  }
}
</style>
