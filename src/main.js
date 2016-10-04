import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Navigation from 'components/Navigation/navigation'

Vue.use(VueRouter)
Vue.use(VueResource)

import routes from 'src/routes'
import 'src/style.scss'

const router = new VueRouter({
  hashbang: false,
  mode: 'history',
  linkActiveClass: 'active',
  routes
})

// TODO container and router-view is disappearing
export default new Vue({
  router,
  el: '#app',
  components: {Navigation},
  template: 'index.html',
  render: h => h(Navigation)
})

// router.start(App, '#app')
