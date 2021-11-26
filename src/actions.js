import { ADD_ITEM, REMOVE_ITEM, APPLY_DISCOUNT } from './actionTypes';

export function addItem(id) {
    return {
        type: ADD_ITEM,
        id
    };
};

export function removeItem(id) {
    return {
        type: REMOVE_ITEM,
        id
    }
};

export function applyDiscount(discount) {
    return {
        type: APPLY_DISCOUNT,
        discount
    }
}