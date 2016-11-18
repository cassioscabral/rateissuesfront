// import Home from 'components/Home/home'
import Add from 'components/Add/add'
import ExploreProject from 'components/ExploreProject/explore'
import Project from 'components/Project/project'
import ProjectAbout from 'components/Project/projectAbout'
import NotFound from 'components/NotFound/notFound'

const routes = [
  {path: '/', name: 'home',component: ExploreProject},
  {path: '/add', name: 'add',component: Add},
  {path: '/explore', name: 'explore',component: ExploreProject},
  {
    path: '/project/:id',
    name: 'project',
    component: Project,
    children: [
      {
        path: 'about',
        name: 'project-about',
        component: ProjectAbout
      }
    ]
  },
  {path: '/*', component: NotFound}
]

export default routes
