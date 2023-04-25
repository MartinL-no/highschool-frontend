import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import studentsService from "../services/students";

export default function Root() {
  const [student, setStudent] = useState(null);
  const name = student == null ? null : student.name;
  const role = student == null ? null : student.role;


  useEffect(() => {
    studentsService.getOne("Geir")
      .then((s) => {
        setStudent(s);
    })
  }, []);

  return (
    <>
      <div id="sidebar">
        <img src="/src/assets/logo.webp" alt="logo"/>
        <h1>{name} ({role})</h1>
        
        <nav>
          <ul>
            <li>
              <Link to={`/subjects/`}>Your Subjects</Link>
            </li>
            <li>
              <Link to={`/classes/`}>Your Classes</Link>
            </li>
            <li>
              <Link to={`/timetable/`}>Your Timetable</Link>
            </li>
            <li>
              <Link to={`/profile/`}>Your Profile</Link>
            </li>
            <li>
              <Link to={`/addBooking/`}>Add Booking</Link>
            </li>
          </ul>
        </nav>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}