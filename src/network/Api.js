import axios from 'axios'

export default axios.create({
  baseURL: 'http://www.mocky.io/v2',
  timeout: 5000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 23456789'
  }
})
