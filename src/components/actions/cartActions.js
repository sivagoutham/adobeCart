import {ADD_TO_CART} from '../actions/action-types/cart-actions'

export const addToCart =(name)=>{
    return {
        type : ADD_TO_CART,
        name
    }
}