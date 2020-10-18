import axios from 'axios'

const CountdownApiService = {
  init () {
    axios.defaults.baseURL = "http://localhost:8888" // TODO Make environment variable based setting
  },
  get(slug='') {
    return axios
      .get(`countdown/countdowns/${slug}`)
      .catch((error) => {
        throw new Error(`CountdownApiService ${error}`)
      })
  },
  post(target) {
    return axios
      .post(`countdown/countdowns`, {
        countdown_target: target,
      })
      .catch((error) => {
        throw new Error(`CountdownApiService ${error}`)
      })
  }
}

export default CountdownApiService
