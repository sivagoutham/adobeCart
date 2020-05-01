import {ADD_TO_CART,SUBTRACT_QUANTITY,REMOVE_ITEM,ADD_QUANTITY,SEARCH_ITEM} from '../actions/action-types/cart-actions'

export const addToCart =(name)=>{
    return {
        type : ADD_TO_CART,
        name
    }
}
export const removeItem =(name)=>{
    return {
        type : REMOVE_ITEM,
        name
    }
}
export const addQuantity =(name)=>{
    return {
        type : ADD_QUANTITY,
        name
    }
}
export const subtractQuantity =(name)=>{
    return {
        type : SUBTRACT_QUANTITY,
        name
    }
}
export const searchitem = (name)=>{
    return{
        type: SEARCH_ITEM,
        name
    }
}