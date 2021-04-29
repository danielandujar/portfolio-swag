import axios from 'axios'
const baseUrl = 'http://localhost:3001/strings'

const getAll = ({locale}) => {
    console.log(locale)
  const request = axios.get(baseUrl)
  return request.then(response => response.data.EN)
}

export default { getAll }