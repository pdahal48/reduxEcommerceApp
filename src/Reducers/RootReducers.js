import data from '../data.json'
import { ADD_ITEM, REMOVE_ITEM, APPLY_DISCOUNT } from '../actionTypes';
import { calculateCartTotal } from '../helpers'

const INITIAL_STATE = { 
    products: data.products,
    cart: {},
    cartValue: 0.0,
    discountApplied: false,
    discountAmount: 0
};

const validDiscount = {
    REMOVE10: 0.1,
    REMOVE20: 0.2,
    REMOVE30: 0.3
};

const RootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_ITEM: {
            const cartCopy = { ...state.cart }
            cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;
                return {
                    ...state, 
                    cart: cartCopy,
                    cartValue: calculateCartTotal(
                        state.products,
                        cartCopy,
                        state.discountAmount
                    )
                };
            }
      case REMOVE_ITEM: {
        const cartCopy = { ...state.cart };
        if (!cartCopy[action.id]) return state;
        cartCopy[action.id]--;
        if (cartCopy[action.id] === 0) {
            delete cartCopy[action.id];
        }
          return {
              ...state,
              cart: cartCopy,
              cartValue: calculateCartTotal(
                  state.products,
                  cartCopy,
                  state.discountAmount
                )
            };
        }
        case APPLY_DISCOUNT:
            if (state.discountApplied === false && validDiscount[action.discount]) {
                const discountAmount = validDiscount[action.discount];
                return {
                    ...state,
                    cartValue: calculateCartTotal(
                        state.products,
                        state.cart,
                        discountAmount
                    ),
                    discountApplied: true,
                    discountAmount
                };
            }
            return state;
        default:
            return state;
    }
}

export default RootReducer;