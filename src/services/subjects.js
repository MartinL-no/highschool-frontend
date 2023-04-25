import axios from 'axios'

const baseUrl = 'api/subjects'

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

const getSuggestedTimes = async (name) => {
  const request = axios.get(`${baseUrl}/${name}/suggestedTimes`)
  const response = await request
  return response.data
}

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}


export default { getAll, getOne, getSuggestedTimes, create }