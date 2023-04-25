import axios from 'axios'

const baseUrl = '/api/rooms'

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


export default { getAll, getOne }