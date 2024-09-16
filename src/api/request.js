import axios from 'axios'

const service =  axios.create({
    baseURL: '/api',
    timeout: 10000,
    // headers : {"Access-Control-Allow-Origin":"*"}
})

export default service
