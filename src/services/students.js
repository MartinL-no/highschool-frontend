import axios from 'axios'

const baseUrl = '/api/students'

const getAll = async () => {
  const request = axios.get(baseUrl)
  const response = await request
  return response.data
}

const getOne = async (name) => {
  const request = axios.get(`${baseUrl}/${name}`)
  const response = await request
  return response.data
}

const getTimetable = async (name) => {
  const request = axios.get(`${baseUrl}/${name}/timetable`)
  const response = await request
  return response.data
}

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}


export default { getAll, getOne, getTimetable, create }