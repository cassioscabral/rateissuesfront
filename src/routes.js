import Home from 'components/Home/home'
import Posts from 'components/Posts/posts'
import Post from 'components/Posts/post'
import Add from 'components/Add/add'
import SearchProject from 'components/SearchProject/search'
import ExploreProject from 'components/ExploreProject/explore'
import NotFound from 'components/NotFound/notFound'

const routes = [
  {path: '/', component: Home},
  {path: '/posts', component: Posts},
  {path: '/post/:id', component: Post},
  {path: '/add', component: Add},
  {path: '/search', component: SearchProject},
  {path: '/explore', component: ExploreProject},
  {path: '/*', component: NotFound}
]

export default routes
