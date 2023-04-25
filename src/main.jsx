import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import App from './App.jsx'

import Root from "./routes/root";
import ErrorPage from "./components/error-page";
import Profile from "./routes/profile";
import Subjects from "./routes/subjects";
import Classes from "./routes/classes";
import Timetable from './routes/timetable'
import AddBooking from './routes/addBooking'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "subjects",
        element: <Subjects />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
      {
        path: "timetable",
        element: <Timetable />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "addBooking",
        element: <AddBooking />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
