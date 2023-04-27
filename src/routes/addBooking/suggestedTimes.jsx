import { useState } from "react";

import DaysOfWeek from "../../constants/daysOfWeek";
import subjectService from "../../services/subjects";
import GenericTimetable from "../../components/genericTimetable";

// eslint-disable-next-line react/prop-types
export default function SuggestTimes({ subjects }) {
  const [suggestedTimes, setSuggestedTimes] = useState(null)

  if (subjects == null) {
    return <div>Loading...</div>
  }
  
  // eslint-disable-next-line react/prop-types
  const subjectOptions = subjects.map(s => <option key={s.name}>{s.name}</option>)

  const getSuggestedTimes = (event) => {
    event.preventDefault()
    const subject = event.target.subject.value
    subjectService
      .getSuggestedTimes(subject)
      .then(st => setSuggestedTimes(st))
  }

  const timetableRows = suggestedTimes == null ? null : suggestedTimes.map(row => {
    return (
      <tr key={`${row.room}${row.day}${row.startTime}`}>
        <td>{Object.keys(DaysOfWeek)[row.day]}</td>
        <td>Free</td>
        <td>{row.room}</td>
        <td>{row.startTime}</td>
        <td>{row.endTime}</td>
      </tr>
    )
  })

  return (
    <>
      <form onSubmit={getSuggestedTimes} className="booking-forms" id="suggested-time-form">
        <p>
          <span>Suggest Times</span>
          <select id="subject">
            {subjectOptions}
          </select>
          <button type="submit">Show</button>
        </p>
        <p></p>
      </form>
      {suggestedTimes && 
        <GenericTimetable
          timetableRows={timetableRows}
          rowTwoTitle="Availability"
        />
      }
´   </>
  )
}