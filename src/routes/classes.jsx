import { useState, useEffect } from 'react'
import studentsService from '../services/students'

export default function Classes() {
  const [student, setStudent] = useState(null)

  useEffect(() => {
    studentsService
      .getOne('Geir')
      .then(student => {
        setStudent(student)
      })
  }, [])


  if (student == null) {
    return <div>Loading...</div>
  }
  
  const classElements = student.classes.map(c => <li key={c}>{c}</li>)

  return (
    <>
      <ul className="classes-list">
        {classElements}
      </ul> 
    </>
  )
}