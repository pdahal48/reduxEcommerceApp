import { ADD_ITEM, REMOVE_ITEM } from './actionTypes';

export function addItem(item) {
    console.log(item);
    return {
        type: ADD_ITEM,
        ...item
    }
};

export function removeItem() {
    return {
        type: REMOVE_ITEM
    }
};