import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";


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
  
  const classElements = student.classes.map(_class => (
      <Link 
        to={`/classes/${_class.replace(/ /g, "")}/`}
        key={_class}
      >
        {_class}
      </Link>
  ))

  return (
    <div className="classes-page">
      <h1>Your Class</h1>
        {classElements}
    </div>
  )
}