import axios from "axios";

export const AxiosInstance=axios.create({
    baseURL:'yourbaseurlhere',
    timeout:5000
})