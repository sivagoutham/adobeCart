import data from '../../cart.json';
import {ADD_TO_CART} from '../actions/action-types/cart-actions'

const initialData = Object.assign(data)
const initState={
    initialData,
    addedItems:[],
    total:0,
    discount:0,
    finalBill:0 };


const cartReducer = (state = initState,action)=>{
    if(action.type === ADD_TO_CART){
        let addedItem = state.initialData.items.find(item=> item.name === action.name)

        let existed_item= state.addedItems.find(item=> action.name === item.name)
        if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price.actual,
                 discount:state.discount + addedItem.discount,
                 finalBill : state.total-state.discount
                  }
        }else{
            addedItem.quantity = 1;
            
            //calculating the total
            let newTotal = state.total + addedItem.price.actual
            let discount = state.discount+ addedItem.discount;
            let finalBill = newTotal-discount
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal,
                discount:discount,
                finalBill:finalBill
            }
            
        }
    }else{
        return state;
    }
    
}

export default cartReducer;