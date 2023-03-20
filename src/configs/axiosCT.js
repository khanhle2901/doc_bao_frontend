import axios from 'axios'
import { getCookieToken } from '../optionalFunction'

const token = getCookieToken()

const axiosCt = {
  async get(link) {
    try {
      const res = await axios.get(process.env.REACT_APP_API_URL + link, {
        headers: {
          authorization: token,
        },
      })
      return res.data
    } catch (error) {
      return 'fail'
    }
  },
  async post(link, data) {
    try {
      const res = await axios.post(process.env.REACT_APP_API_URL + link, data, {
        headers: {
          authorization: token,
        },
      })
      return res.data
    } catch (error) {
      // console.log(error)
      return 'fail'
    }
  },
  async postFile(link, data) {
    try {
      const res = await axios.post(process.env.REACT_APP_API_URL + link, data, {
        headers: {
          authorization: token,
          'Content-Type': 'multipart/form-data',
        },
      })
      return res.data
    } catch (error) {
      return 'fail'
    }
  },
  async patch(link, data) {
    try {
      const res = await axios.patch(process.env.REACT_APP_API_URL + link, data, {
        headers: {
          authorization: token,
        },
      })
      return res.data
    } catch (error) {
      return 'fail'
    }
  },
  async delete(link, data) {
    try {
      const res = await axios.delete(process.env.REACT_APP_API_URL + link, {
        headers: {
          authorization: token,
        },
        data,
      })
      console.log(res)
      return res.data
    } catch (error) {
      console.log(error)
      return 'fail'
    }
  },
}

export default axiosCt
