import axios from "axios";


const Api = axios.create({
baseURL:'http://localhost:3020/'

})

export default Api;