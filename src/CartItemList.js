import React from 'react'
import { useSelector } from "react-redux";
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
                    key={item.name}
                    id={item.id}
                />
            ))}
        </div>
    )
}

export default CartItemList;