import Home from 'components/Home/home'
import Add from 'components/Add/add'
import SearchProject from 'components/SearchProject/search'
import ExploreProject from 'components/ExploreProject/explore'
import NotFound from 'components/NotFound/notFound'

const routes = [
  {path: '/', component: Home},
  {path: '/add', component: Add},
  {path: '/search', component: SearchProject},
  {path: '/explore', component: ExploreProject},
  {path: '/*', component: NotFound}
]

export default routes
