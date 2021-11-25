import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from './actions'
import CartItem from './CartItem';

const CartItemList = () => {
    const cartProducts = useSelector(state => state.cart);

    return (
        <div className="text-center">
            <h1 className="text-primary">Cart</h1>
            {Object.values(cartProducts).map((item) => (
                <CartItem 
                    name={item.name}
                    src={item.src}
                    price={item.price}
                    desc={item.desc}
                />
            ))}
        </div>
    )
}

export default CartItemList;