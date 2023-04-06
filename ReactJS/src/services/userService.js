import axios from "../axios";


const handleLoginApi = (userEmail, userPassword) => {
    console.log('handleLoginApi');
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}
const getUserApi = (idData) => {
    return axios.get(`/api/get-all-user?id=${idData}`);
}
const createNewUserService = (data) => {
    console.log('data: ', data);
    return axios.post('/api/create-new-user', data);
}
const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    });
}
export {
    handleLoginApi, getUserApi,
    createNewUserService, deleteUserService
};