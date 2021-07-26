import axios from "axios";


export const api = axios.create({
    baseURL: '/api', //axios aproveita o resto da url atras
})