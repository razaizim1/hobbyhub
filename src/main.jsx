import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from './RootLayout/RootLayout.jsx';
import Home from './pages/Home/Home.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import GroupDetails from './components/GroupDetails.jsx';
import AllGroups from './pages/AllGroups/AllGroups.jsx';
import CreateGroup from './pages/CreateGroup/CreateGroup.jsx';
import Login from './pages/Login/Login.jsx';
import Registration from './pages/Registraton/Registration.jsx';
import MyGroups from './pages/MyGroups/MyGroups.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import About from './pages/About/About.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Overview from './pages/Dashboard/Overview.jsx';
import AllItems from './pages/Dashboard/AllItems.jsx';
import AddItem from './pages/Dashboard/AddItem.jsx';
import MyItems from './pages/Dashboard/MyItems.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: RootLayout,
    children: [
      {
        path: "/",
        loader: () => fetch('https://b11a10-server-site.vercel.app/hobby'),
        Component: Home
      },
      {
        path: "login",
        Component: Login
      },
      {
        path: "registration",
        Component: Registration
      },
      {
        path: "about",
        Component: About
      },
      {
        path: "allgroups",
        loader: () => fetch('https://b11a10-server-site.vercel.app/hobby'),
        element: (
            <AllGroups />
        ),
        hydrateFallbackElement: (
          <div className="flex justify-center items-center min-h-[200px]">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "mygroups",
        element: (
          <PrivateRoute>
            <MyGroups />
          </PrivateRoute>
        ),
        hydrateFallbackElement: (
          <div className="flex justify-center items-center min-h-[200px]">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
        loader: () => fetch('https://b11a10-server-site.vercel.app/hobby'),
      },
      {
        path: "creategroup",
        element: (
          <PrivateRoute>
            <CreateGroup />
          </PrivateRoute>
        ),
      },
      {
        path: "groupdetails/:id",
        loader: ({ params }) => fetch(`https://b11a10-server-site.vercel.app/hobby/${params.id}`),
        Component: GroupDetails
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          { index: true, element: <Overview /> },
          { path: "all-items", element: <AllItems /> },
          { path: "add-item", element: <AddItem /> },
          { path: "my-items", element: <MyItems /> },
        ]
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)