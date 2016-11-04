<template>
  <div class="card column" :class="colSizeClass">
    <div class="card-header">
        <h4 class="card-title">{{title}} <slot name="avatar"></slot></h4>
        <h6 class="card-meta">{{meta}}</h6>
    </div>
    <div class="card-image">
        <img :src="image" class="img-responsive" />
    </div>
    <div class="card-body">
        {{body}}
    </div>
    <div class="card-footer" v-if="footerButtons">
        <button
          v-for="button in footerButtons"
          class="btn">
          {{button}}
        </button>
    </div>
</div>
</template>

<script>
export default {
  props: {
    colSize: {
      type: Number
    },
    title: {
      type: String
    },
    meta: {
      type: String
    },
    body: {
      type: String
    },
    footerButtons: {
      type: Array // of strings
    },
    image: {
      type: String
    }
  },
  data () {
    return {}
  },
  computed: {
    colSizeClass () {
      return `col-${this.colSize}`
    }
  },
  methods: {},
  components: {
  }
}
</script>

<style lang="stylus" scoped>
.avatar {
  float: right
}
</style>
