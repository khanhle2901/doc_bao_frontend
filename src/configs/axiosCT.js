import axios from 'axios'

const axiosCt = {
  async get(link) {
    try {
      const res = await axios.get(process.env.REACT_APP_API_URL + link)
      return res.data
    } catch (error) {
      return 'fail'
    }
  },
  async post(link, data) {
    //headers is default
    try {
      console.log(data)
      const res = await axios.post(process.env.REACT_APP_API_URL + link, data, {
        headers: {
          userKey: 'userKey', //key user
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      return res
    } catch (error) {
      console.log(error)
      return 'fail'
    }
  },
  async postFile(link, data) {
    try {
      const res = await axios.post(process.env.REACT_APP_API_URL + link, data, {
        headers: {
          userKey: 'userK',
          'Content-Type': 'multipart/form-data',
        },
      })
      return res.data
    } catch (error) {
      return 'fail'
    }
  },
}

export default axiosCt
