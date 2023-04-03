import axios from "../axios";


const handleLoginApi = (userEmail, userPassword) => {
    console.log('handleLoginApi');
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}
const getUserApi = (idData) => {
    return axios.get(`/api/get-all-user?id=${idData}`);
}
export { handleLoginApi, getUserApi };