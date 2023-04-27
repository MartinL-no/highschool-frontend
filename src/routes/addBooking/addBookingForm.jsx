import { useState, useEffect } from 'react'

import DaysOfWeek from '../../constants/daysOfWeek'
import roomsService from '../../services/rooms'
import bookingsService from '../../services/bookings'

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

  const addBooking = (event) => {
    event.preventDefault()

    bookingsService.create({
      subject: event.target.subject.value,
      room: event.target.room.value,
      day: Number(event.target.day.value),
      startTime: event.target.startTime.value + ":00",
      endTime: event.target.endTime.value + ":00",
    })

    event.target.reset();
  }

  // eslint-disable-next-line react/prop-types
  const subjectOptions = subjects.map(s => <option key={s.name}>{s.name}</option>)
  const roomOptions = rooms.map(s => <option key={s.name}>{s.name}</option>)

  return (
    <>
      <form onSubmit={addBooking} className="booking-forms">

      <label>
        <span>Subject</span>
        <select id ="subject">
          {subjectOptions}
        </select>
      </label>

      <label>
        <span>Room</span>
        <select id = "room">
          {roomOptions}
        </select>
      </label>
      
      <label>
        <span>Day</span>
        <select id = "day" required>
          <option value="0">{DaysOfWeek.Monday}</option>
          <option value="1">{DaysOfWeek.Tuesday}</option>
          <option value="2">{DaysOfWeek.Wednesday}</option>
          <option value="3">{DaysOfWeek.Thursday}</option>
          <option value="4">{DaysOfWeek.Friday}</option>
        </select>
      </label>

      <label>
        <span>Start Time</span>
        <input
          type="time"
          name="startTime"
          min="09:00"
          max="17:00"
          required
        />
      </label>

      <label>
        <span>End Time</span>
        <input
          type="time"
          name="endTime"
          min="09:00"
          max="17:00"
          required
        />
      </label>

      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </form>
    </>
  )
}