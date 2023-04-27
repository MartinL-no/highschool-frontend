import { useNavigate } from "react-router-dom"

import teachersService from '../services/teachers'

export default function AddStudent() {
  const navigate = useNavigate();

  const addStudent = (event) => {
    event.preventDefault()
    const name = event.target.name.value
    const profilePicture = event.target.profilePicture.value
    teachersService.create({ name, profilePicture })
      .then(() => {
        const nameToParameter = name.replace(/ /g, "")
        navigate(`/teachers/${nameToParameter}`)
      })
  }

  return (
    <div className="add-teacher-page">
      <h1>Add Teacher</h1>
      <form onSubmit={addStudent} className="booking-forms">

        <label>
          <span>Name</span>
          <input type="text" name="name" required />
        </label>

        <label>
          <span>Profile Picture</span>
          <input type="URL" name="profilePicture" required />
        </label>
        
        <p>
          <button type="submit">Create</button>
          <button type="button">Cancel</button>
        </p>
      </form>
    </div>
  )
}