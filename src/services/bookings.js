import axios from 'axios'

const baseUrl = '/api/bookings'

const create = async (newObject) => {
  console.log(newObject)
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

export default { create }