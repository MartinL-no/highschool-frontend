import { useState, useEffect } from 'react'
import studentsService from '../services/students'

export default function Timetable() {
  const [timetable, setTimetable] = useState(null)

  useEffect(() => {
    studentsService.getTimetable('Geir')
      .then(timetable => {
        setTimetable(timetable)
      })
  }, [])

  const DaysOfWeek = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
  }

  if (timetable == null) {
    return <div>Loading...</div>
  }
  const timetableRows = timetable.map(row => {
      return (
        <tr key={`${row.subject}${row.startTime}`}>
          <td>{Object.keys(DaysOfWeek)[row.day]}</td>
          <td>{row.subject}</td>
          <td>{row.room}</td>
          <td>{row.startTime}</td>
          <td>{row.endTime}</td>
        </tr>
      )
    })

  return (
    <>
      <table className="timetable">
        <thead>
          <tr>
            <th>Day</th>
            <th>Subject</th>
            <th>Room</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
       <tbody>
        {timetableRows}
       </tbody>
      </table>
    </>
  )
}