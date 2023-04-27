import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import studentsService from '../services/students'

export default function Subjects() {
  const [student, setStudent] = useState(null)

  useEffect(() => {
    studentsService.getOne('Geir')
      .then(student => {
        setStudent(student)
      })
  }, [])

  if (student == null) {
    return null
  }

  console.log(student)
  const subjectElements = student.subjects.map(sub =>
    <Link key={sub} to={`/subjects/${sub.replace(/ /g, "")}/`}>
      {sub}
    </Link>
  )
  return (
    <div className="subjects-page">
        <h1>Your Subjects</h1>
        {subjectElements}
    </div>
  )
}