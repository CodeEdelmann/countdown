import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL

const CountdownApiService = {
  get(slug='') {
    return axios
      .get(`countdown/countdowns/${slug}`)
      .catch((error) => {
        throw new Error(error.response.data.detail)
      })
  },
  post(target) {
    return axios
      .post(`countdown/countdowns/`, {
        countdown_target: target,
      })
      .catch((error) => {
        throw new Error(error.response.data.detail)
      })
  }
}

export default CountdownApiService
