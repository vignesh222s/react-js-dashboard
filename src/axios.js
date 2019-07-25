import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5000/'
    //baseURL: "http://admin.natcue.com/"
})

export default instance