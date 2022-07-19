import axios from "axios"

export const axiosGet = (url: string) => {
    return axios.get(url)
}