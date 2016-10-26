// import Home from 'components/Home/home'
import Add from 'components/Add/add'
import ExploreProject from 'components/ExploreProject/explore'
import NotFound from 'components/NotFound/notFound'

const routes = [
  {path: '/', component: ExploreProject},
  {path: '/add', component: Add},
  {path: '/explore', component: ExploreProject},
  {path: '/*', component: NotFound}
]

export default routes
