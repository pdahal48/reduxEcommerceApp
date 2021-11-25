import data from '../data.json'
import { ADD_ITEM, REMOVE_ITEM } from '../actionTypes';

const INITIAL_STATE = { 
    products: data.products,
    cart: {},
    cartValue: 0.0
};

const RootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_ITEM: {
            const cartCopy = { ...state.cart }
            cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;
                return {
                    ...state, 
                    cart: cartCopy,
                }  
            }
      case REMOVE_ITEM: {
        const cartCopy = { ...state.cart }
        if (!cartCopy[action.id]) return state;
        cartCopy[action.id]--;
        if (cartCopy[action.id] === 0) {
            delete cartCopy[action.id]
        }
          return {
              ...state,
              cart: cartCopy
          }
        }
        default:
            return state;
    }
}

export default RootReducer;