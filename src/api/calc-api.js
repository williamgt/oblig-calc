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

function calculate(expression) {
    return apiClient.get("/calculate/" + expression);
}

export function calculate2(expression) {
    console.log(expression)
    let promise = axios.get("http://localhost:8085/calculate/2+2")
    promise.then((result) => console.log(result.data))
}

export function calculate3(expression){
    console.log(expression)
    const baseURI = "http://localhost:8085/calculate/2+2"
    this.axios.get(baseURI)
        .then((result) => {
            console.log(result.data)
            return result
        })
}

export default calculate
