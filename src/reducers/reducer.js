import {UPDATE_PRICE} from "../actions/actions"

const initialState = {
    price: "21,798"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PRICE:
            return {...state, price: action.payload}
        default:
            return state;
        }
}

export default reducer;