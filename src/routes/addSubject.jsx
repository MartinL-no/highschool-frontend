import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import teachersService from '../services/teachers'
import studentsService from '../services/students'
import subjectsService from '../services/subjects'

export default function AddSubject() {
  const [teachers, setTeachers] = useState(null)
  const [students, setStudents] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    teachersService.getAll().then(s => {
      setTeachers(s)
    })
    studentsService.getAll().then(c => {
      setStudents(c)
  })
  }, [])

  const addStudent = (event) => {
    event.preventDefault()
    const subjectName = event.target.name.value
    const teacher = event.target.teacher.value
    const students = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map((elem) => elem.name)

    subjectsService
      .create({ subjectName, teacher, students })
      .then(() => {
        const nameToParameter = subjectName.replace(/ /g, "")
        navigate(`/subjects/${nameToParameter}`)
      })
  }

  if (teachers == null || students == null) {
    return <div>Loading...</div>
  }

  const teacherOptions = teachers.map(t => <option key={t.name}>{t.name}</option>)
  const studentCheckboxes = students.map(s =>
    <div key={s.name} className="checkbox">
      <input 
        id={s.name}
        name={s.name}
        type="checkbox"
      />
      <label htmlFor={s.name}>{s.name}</label>
    </div>
  )

  return (
    <div className="add-subject-page">
      <h1>Add Subject</h1>

      <form onSubmit={addStudent} className="booking-forms">
        <label>
          <span>Name</span>
          <input type="text" name="name" />
        </label>

        <label>
          <span>Teacher</span>
          <select id ="teacher">
            {teacherOptions}
          </select>
        </label>

        <label>
          <span>Students</span>
          <div className="checkboxes">
            {studentCheckboxes}
          </div>
        </label>
          
        <p>
          <button type="submit">Create</button>
          <button type="button">Cancel</button>
        </p>
      </form>
    </div>
  )
}