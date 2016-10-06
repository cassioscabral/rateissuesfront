import Vue from 'vue'
import VueResource from 'vue-resource'
import {router} from 'src/main'

const API_BASE = 'http://jsonplaceholder.typicode.com'

Vue.use(VueResource)

Vue.http.options = {
  root: API_BASE
}

Vue.http.interceptors.push((request, next) => {
  next((response) => {
    // Handle global API 404 =>
    if (response.status === 404) {
      router.go('/404')
    }
  })
})

export const projectResource = Vue.resource('project{/id}')


// js-data example
// let {project} = require('./store')
// project.create({name: 'John'})
// project.find('-KTH0amscJRT9G17IL3J').then(data => console.log(data))
