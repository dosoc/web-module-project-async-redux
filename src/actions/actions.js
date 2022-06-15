import {URL} from '../api';
import axios from 'axios'

export const UPDATE_PRICE = "UPDATE_PRICE"

export const updatePrice = () => {
    return function(dispatch){
        axios.get(URL)
            .then(res=> {
                const usdPrice = res.data
                dispatch({type: UPDATE_PRICE, payload: usdPrice})
            })
            .catch(err=> {
                console.log(err)
            })
    }
} 