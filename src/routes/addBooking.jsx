import { useState, useEffect } from 'react'

import subjectsService from '../services/subjects'
import roomsService from '../services/rooms'
import AddBookingForm from '../components/addBookingForm';
import SuggestTimes from '../components/suggestedTimes';

export default function AddBooking() {
  const [subjects, setSubjects] = useState(null)
  const [rooms, setRooms] = useState(null)

  useEffect(() => {
    subjectsService.getAll().then(s => {
        setSubjects(s)
      })
    roomsService.getAll().then(r => {
      setRooms(r)
    })
  }, [])

  if (subjects == null || rooms == null) {
    return <div>Loading...</div>
  }

  return (
    <>
      <SuggestTimes subjects={subjects}/>

      <AddBookingForm subjects={subjects}/>

      
    </>
  )
}