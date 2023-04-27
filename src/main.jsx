import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import './index.css'
import Root from "./routes/root"
import ErrorPage from "./components/error-page"
import Profile from "./routes/profile"
import Subjects from "./routes/subjects"
import Subject from './routes/subject'
import Classes from "./routes/classes"
import Class from './routes/class'
import BookingsTimetable from './routes/timetable'
import Students from './routes/students'
import Student from './routes/student'
import Teachers from './routes/teachers'
import Teacher from './routes/teacher'
import AddBooking from './routes/addBooking'
import AddStudent from './routes/addStudent'
import AddTeacher from './routes/addTeacher'
import AddSubject from './routes/addSubject'

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
        path: "subjects/:subjectName",
        element: <Subject />,
        errorElement: <h2>Subject not found</h2>,
      },
      {
        path: "classes",
        element: <Classes />
      },
      {
        path: "classes/:className",
        element: <Class />,
        errorElement: <h2>Class not found</h2>,
      },
      {
        path: "timetable",
        element: <BookingsTimetable />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "students/:studentName",
        element: <Student />,
        errorElement: <h2>Student not found</h2>,
      },
      {
        path: "teachers",
        element: <Teachers />,
      },  
      {
        path: "teachers/:teacherName",
        element: <Teacher />,
        errorElement: <h2>Teacher not found</h2>,
      },
      {
        path: "addBooking",
        element: <AddBooking />,
      },
      {
        path: "addStudent",
        element: <AddStudent />,
      },
      {
        path: "addTeacher",
        element: <AddTeacher />,
      },
      {
        path: "addSubject",
        element: <AddSubject />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
