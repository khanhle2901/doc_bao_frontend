import axios from 'axios'
const adminToken = 'U2FsdGVkX19kq2rTzsT0zwl3OWyAt8DLw3FBTikZVz5FbUWiMlAU3gyaiM1ccE5msYHYs0e97//iXtDofztuxw=='
const axiosCt = {
  async get(link) {
    try {
      const res = await axios.get(process.env.REACT_APP_API_URL + link, {
        headers: {
          authorization: adminToken,
        },
      })
      return res.data
    } catch (error) {
      return 'fail'
    }
  },
  async post(link, data) {
    //headers is default
    try {
      const res = await axios.post(process.env.REACT_APP_API_URL + link, data, {
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          authorization: adminToken,
        },
      })
      return res.data
    } catch (error) {
      return 'fail'
    }
  },
  async postFile(link, data) {
    try {
      const res = await axios.post(process.env.REACT_APP_API_URL + link, data, {
        headers: {
          authorization:
            'U2FsdGVkX18Q8QE9vaCJxISdz+nQ4wTertdABPW/CK/eURBHzE9VEfheWGLCfFbSfA/l6p74wsYY4v+18ICEGPTF4qtBySkMnSxjpEDlRb4=',
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
          authorization: adminToken,
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
          authorization: adminToken,
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
