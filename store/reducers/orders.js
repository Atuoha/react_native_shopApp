import Order from "../../models/orderList"
import { ADD_ORDER, REMOVE_ORDER } from '../actions/orders'

const initialState = {
    orderList: [],
}

const ordersReducer = (state = initialState, action)=>{
    switch (action.type) {    
      case ADD_ORDER:
        console.log('ordered...')
        const newOrder= new Order(new Date().toString(), action.orderData.items, action.orderData.amount, new Date())
        return{...state, orderList: state.orderList.concat(newOrder)}

      // case REMOVE_ORDER:

      default:
        return state
    }
}

export default ordersReducer