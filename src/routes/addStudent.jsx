import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import studentsService from '../services/students';
import subjectsService from '../services/subjects'
import classesService from '../services/classes'

export default function AddStudent() {
  const [subjects, setSubjects] = useState(null)
  const [classes, setClasses] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    subjectsService.getAll().then(s => {
        setSubjects(s)
    })
    classesService.getAll().then(c => {
      setClasses(c)
  })
  }, [])

  const addStudent = (event) => {
    event.preventDefault()
    const name = event.target.name.value
    const profilePicture = event.target.profilePicture.value
    const className = event.target.class.value

    studentsService.create({ name, profilePicture, className })
      .then(() => {
        const nameToParameter = name.replace(/ /g, "")
        navigate(`/students/${nameToParameter}`)
    })
  }

  if (subjects == null || classes == null) {
    return <div>Loading...</div>
  }

  const classOptions = classes.map(s => <option key={s.name}>{s.name}</option>)

  return (
    <div className="add-student-page">
      <h1>Add Student</h1>
      <form onSubmit={addStudent} className="booking-forms">

        <label>
          <span>Name</span>
          <input type="text" name="name" />
        </label>

        <label>
          <span>Profile Picture</span>
          <input type="URL" name="profilePicture" />
        </label>

        <label>
        <span>Class</span>
        <select id ="class">
          {classOptions}
        </select>
      </label>
        
        <p>
          <button type="submit">Create</button>
          <button type="button">Cancel</button>
        </p>
      </form>
    </div>
  )
}