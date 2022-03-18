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

export function calculate(expression) {
    return apiClient.get("/calculate/" + expression);
}

export function findCalculationsByEmail(email) {
    return apiClient.get("/calculations-by-email/"+email);
}

export function addCalculationWithUser(user, calculation){
    let userAndCalculation = [user, calculation]
    apiClient.post("/calculations/add-with-user", userAndCalculation)
        .then((response) => {
            console.log(response)
        })
}

export function addCalculationNoUser(calculation){
    apiClient.post("/calculations/add-no-user", calculation)
        .then(response => {
            console.log(response)
        })
}
