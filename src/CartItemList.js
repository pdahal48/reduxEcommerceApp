import React from 'react'
import { useSelector } from "react-redux";
import CartItem from './CartItem';
import { Col, Row } from 'react-bootstrap';


const CartItemList = () => {
    const cartProducts = useSelector(state => state.cart);
    let total = 0;

    return (
        <div className="container text-center">
            <h1 className="text-secondary">Your Shopping Cart</h1>
            <Row className="justify-content-center mt-4">
                <Col>
                    {Object.values(cartProducts).map((item) => {
                        total += item.price;
                        return (
                        <CartItem 
                            name={item.name}
                            src={item.src}
                            price={item.price}
                            desc={item.desc}
                            key={item.name}
                            id={item.id}
                        />
                        )})}
                </Col>
                <Col className="col-3 card cart-card">
            <h2 className="text-dark"> Cart Summary </h2>
            <div>
                <b>Subtotal: ${total}</b>
                <div>
                    <button 
                        className="btn btn-outline-success mt-2"
                        onClick = {() => alert('Thank for visiting my site!')}
                    > 
                        <b>
                            Continue to checkout
                        </b>
                    </button>
                </div>
            </div>
        </Col>
            </Row>
            
        </div>
    )
}

export default CartItemList;