<template>
<div class="column col-xs-12" :class="colSizeClass">
  <div class="card">
    <div class="card-header">
      <slot name="header">
        <slot>
          <h4 class="card-title">{{title}} <slot name="avatar"></slot></h4>
          <h6 class="card-meta">{{meta}}</h6>
        </slot>
      </slot>
    </div>
    <div class="card-image">
      <img :src="image" class="img-responsive" />
    </div>
    <div class="card-body">
      {{body}}
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
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
