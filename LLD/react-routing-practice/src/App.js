import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Home from './page/Home'
import Events from './page/Events'
import EventDetails from './page/EventDetails'
import NewEvent from './page/NewEvent'
import EditEvents from './page/EditEvent'

const router= createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/events',
      element:<Events/>
    },
    {
      path:'/events/:eventId',
      element:<EventDetails/>
    },
    {
      path:'/events/new',
      element:<NewEvent/>
    },
    {
      path:'/events/:eventId/edit',
      element:<EditEvents />
    }

  ]
)

export default function App(){
    return <RouterProvider router={router}/>
}