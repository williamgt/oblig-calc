import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8085",
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Methods": "GET",
        'Access-Control-Allow-Origin': '*',
        'Status': '200 OK' //TODO super important!!!!!!!!!
    }
})


export function login(username, password) {
    return apiClient.get("/users/login-request/" + username + '/' + password)
}

export function register(user){
    return apiClient.post('/users/register', user)
}
