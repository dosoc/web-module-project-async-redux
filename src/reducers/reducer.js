import {UPDATE_PRICE} from "../actions/actions"

const initialState = {
    price: "",
    time: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PRICE:
            return {
                ...state, 
                price: action.payload.bpi.USD.rate,
                time: action.payload.time.updated
            }
        default:
            return state;
        }
}

export default reducer;