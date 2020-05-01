import data from '../../cart.json';
import {ADD_TO_CART,SUBTRACT_QUANTITY,REMOVE_ITEM,ADD_QUANTITY,SEARCH_ITEM} from '../actions/action-types/cart-actions'

const initialData = Object.assign(data)
const initState={
    initialData,
    addedItems:[],
    total:0,
    discount:0,
    finalBill:0,
    searchItems:[] };


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
    }
    if(action.type===REMOVE_ITEM){
        
        let removeItem = state.initialData.items.find(item=> item.name === action.name);
        let newList = state.addedItems.filter(item=> item.name !== action.name)

        let newTotal = state.total -(removeItem.price.actual*removeItem.quantity)
        let discount = state.discount- removeItem.discount;
            let finalBill = newTotal-discount

        return{
            ...state,
            addedItems:newList,
            total:newTotal,
                discount:discount,
                finalBill:finalBill
        }
    }
    if(action.type === ADD_QUANTITY){
        let addedItem = state.initialData.items.find(item=> item.name === action.name)
            addedItem.quantity += 1
            let newTotal = state.total + addedItem.price.actual
            let discount = state.discount+ addedItem.discount;
            let finalBill = newTotal-discount
            return{
                ...state,
                total : newTotal,
                discount:discount,
                finalBill:finalBill
            }
    }
    if(action.type === SUBTRACT_QUANTITY){
        let addedItem = state.initialData.items.find(item=> item.name === action.name)
        if(addedItem.quantity === 1){
            let newItems = state.addedItems.filter(item=> item.name !== action.name)
            let newTotal = state.total-addedItem.price.actual
            let discount = state.discount- addedItem.discount;
            let finalBill = newTotal-discount
            return{
                ...state,
                addedItems:newItems,
                total : newTotal,
                discount:discount,
                finalBill:finalBill
            }
        }else{
            addedItem.quantity-=1;
            let newTotal = state.total-addedItem.price.actual
            let discount = state.discount- addedItem.discount;
            let finalBill = newTotal-discount
            return{
                ...state,
                total : newTotal,
                discount:discount,
                finalBill:finalBill
            }
        }
    }
    if(action.type === SEARCH_ITEM){
        let items = state.initialData.items.filter(val=>val.name.toLowerCase().includes(action.name.toLowerCase()))
        return{
            ...state,
            searchItems: {items:items}
        }
    }
    
        return state;
    
    
}

export default cartReducer;