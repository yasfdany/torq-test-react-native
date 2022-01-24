import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    cars: [],
    loading: false,
}

export const carReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.GET_CARS:
            let resultData = []
            const data = payload.data.data
            for(let car of data){
                if(car.version.toLowerCase().includes((payload.search ?? "").toLowerCase())){
                    resultData.push(car)
                }
            }
            
            return {
                ...state, 
                cars: resultData,
                loading: false,
            }
        case ActionTypes.SET_LOADING_CAR:
            return {
                ...state,
                loading: payload.loading,
            }   
        default:
            return state
    }
}