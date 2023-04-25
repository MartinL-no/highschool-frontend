import axios from 'axios'

const baseUrl = 'api/students'

const getAll = async () => {
  const request = axios.get(baseUrl)
  const response = await request
  return response.data
}

const getOne = async (name) => {
  const request = axios.get(`${baseUrl}/${name}`)
  const response = await request
  console.log(response)
  return response.data
}

const getTimetable = async (name) => {
  const request = axios.get(`${baseUrl}/${name}/timetable`)
  const response = await request
  console.log(response)
  return response.data
}

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}


export default { getAll, getOne, getTimetable, create }
/*
//Add type to the function
const setToken = (newToken: any) => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async (newObject: any) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const replace = async (upDatedObject: { id: any }) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.put(`${baseUrl}/${upDatedObject.id}`, upDatedObject, config)
  return response.data
}

const remove = async (blogId: any) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.delete(`${baseUrl}/${blogId}`, config)
  return response.status
}

export default { getAll, setToken, create, replace, remove }
*/
