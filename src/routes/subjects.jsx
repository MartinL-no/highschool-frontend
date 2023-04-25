import { useState, useEffect } from 'react'
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

  const subjectElements = student.subjects.map(sub => <li key={sub}>{sub}</li>)

  return (
    <>
      <ul className="subjects-list">
        {subjectElements}
      </ul>
    </>
  )
}