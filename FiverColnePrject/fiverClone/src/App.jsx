import { useState } from 'react'
import './common.scss'
import NavBar from './Components/navBar/NavBar';
import Footer from './Components/footer/Footer'
import Home from './pages/home/Home';
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Login from "./pages/loging/Loging";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from "./pages/myGigs/MyGigs";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,useLocation
} from "react-router-dom";
const LayOut=()=>{
  const { pathname } = useLocation();
  return(
    <div className="app">
      <NavBar pathName={pathname}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element:<LayOut/>,
      children:[{
        path:'/',
        element:<Home/>
        
      }, 
      {
          path: "/gigs",
          element: <Gigs />,
      },
      {
          path: "/myGigs",
          element: <MyGigs />,
      },
      {
          path: "/orders",
          element: <Orders />,
      },
      {
          path: "/messages",
          element: <Messages />,
      },
      {
          path: "/message/:id",
          element: <Message />,
      },
      {
          path: "/add",
          element: <Add />,
      },
      {
          path: "/gig/:id",
          element: <Gig />,
     },
     
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
     ]
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    
    </>
  )
}

export default App
