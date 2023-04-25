import axios from "axios";

export default axios.create({
    baseURL: "https://task-manager-api-ky7j.onrender.com",
    withCredentials: false,
   
})