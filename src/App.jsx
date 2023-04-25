import { useEffect, useState } from 'react'
import './App.css'
import studentService from './services/students'
import teacherService from './services/teachers'
import subjectService from './services/subjects'
import classService from './services/classes'
import roomService from './services/rooms'
import bookingService from './services/bookings'


function App() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeacher] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [classes, setClasses] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);


  useEffect(() => {
    const newStudent = { name: "Mr Poop" }
    const newSubject = { subjectName: "Maths", teacherName: "Terje" }
    const newBooking = {
      subject: "Computing",
      room: "Classroom One",
      day: 5,
      startTime: "09:15:00",
      endTime: "09:45:00"
    }
    bookingService.create(newBooking).then(student =>
      setStudents(student)
    )
  }, [])
  console.log(students)
  return (
    <>
    </>
  )
}

export default App