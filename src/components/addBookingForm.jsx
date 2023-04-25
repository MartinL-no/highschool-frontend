import { useState, useEffect } from 'react'
import { Form } from "react-router-dom";

import roomsService from '../services/rooms'

// eslint-disable-next-line react/prop-types
export default function AddBookingForm({ subjects }) {
  const [rooms, setRooms] = useState(null)

  useEffect(() => {
    roomsService.getAll().then(r => {
      setRooms(r)
    })
  }, [])

  if (subjects == null || rooms == null) {
    return <div>Loading...</div>
  }

  // eslint-disable-next-line react/prop-types
  const subjectOptions = subjects.map(s => <option key={s.name} value={s.name}/>)
  const roomOptions = rooms.map(s => <option key={s.name} value={s.name}/>)

  return (
    <>
      <Form method="post" className="booking-forms">
      <p>
        <span>Subject</span>
        <input
          list="subjects"
          name="subject"
        />
        <datalist id="subjects">
          {subjectOptions}
        </datalist>
      </p>

      <label>
        <span>Room</span>
        <input
          list="rooms"
          name="room"
        />
        <datalist id="rooms">
          {roomOptions}
        </datalist>
      </label>
      
      <label>
        <span>Day</span>
        <input
          list="days"
          name="day"
        />
        <datalist id="days">
          <option value="Monday" />
          <option value="Tuesday" />
          <option value="Wednesday" />
          <option value="Thursday" />
          <option value="Friday" />
        </datalist>
      </label>

      <label>
        <span>Start Time</span>
        <input
          type="time"
          name="startTime"
          min="09:00"
          max="17:00"

        />
      </label>

      <label>
        <span>End Time</span>
        <input
          type="time"
          name="endTime"
          min="09:00"
          max="17:00"
        />
      </label>

      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
    </>
  )
}