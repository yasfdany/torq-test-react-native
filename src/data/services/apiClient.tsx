import axios from 'axios'

export const apiConfig = {
    baseURL: "https://7827f92a-20f2-48aa-a103-8b5465c7ebb6.mock.pstmn.io/",
};

export const apiClient = axios.create({
    baseURL: apiConfig.baseURL,
})