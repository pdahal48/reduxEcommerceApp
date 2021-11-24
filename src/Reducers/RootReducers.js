import { products } from '../data.json'

const INITIAL_STATE = { products, cart: []};

const RootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "ADD_ITEM":
            return {
                ...state, 
                cart: [
                    ...state.cart, {...action.item}
                ]
            }
      case "REMOVE_ITEM":
          return {
              ...state,
              cart: state.cart.filter((item) => item.id !== action.id)
          }
        default:
            return state;
    }
}

export default RootReducer;