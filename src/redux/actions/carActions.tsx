import {apiClient, apiConfig} from "../../data/services/apiClient"
import {ActionTypes} from "../constants/actionTypes"

export const getCars = (search) => async (dispatch) => {
    dispatch({
        type: ActionTypes.SET_LOADING_CAR,
        payload: {loading: true},
    })
    await apiClient
        .get(`get-cars`)
        .then((response: AxiosResponse) => {
            dispatch({
                type: ActionTypes.GET_CARS,
                payload: {
                    data: response.data,
                    search: search,
                },
            })
        })
        .catch((reason: AxiosError) => {
        })
}