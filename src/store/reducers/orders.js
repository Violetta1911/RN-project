import { date } from "yup";
import Order from "../../models/orders";
import { ADD_ORDER } from "../actions/orders";

const initialState = {
    orders: []
}

export default ordersReducer = (state = initialState, action) => {
    switch(action.type) {
      case ADD_ORDER:
          const newOrder = new Order(new date().toString(), action.orderData.items, action.orderData.totalAmount, new Date()); 
          return {
            ...state,
            orders: state.orders.concat(newOrder)
           }
    } 
    return state;  
   
}