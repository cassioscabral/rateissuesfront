import Home from 'components/Home/home'
import Posts from 'components/Posts/posts'
import Post from 'components/Posts/post'
import Add from 'components/Add/add'
import NotFound from 'components/NotFound/notFound'

const routes = {
  '/': {
    component: Home
  },
  '/posts': {
    component: Posts
  },
  '/post/:id': {
    name: 'post',
    component: Post
  },
  '/add': {
    component: Add
  },
  '*': {
    component: NotFound
  }
}

export default routes
