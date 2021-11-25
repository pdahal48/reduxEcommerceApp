import React from 'react'
import { useSelector, shallowEqual } from "react-redux";
import CartItem from './CartItem';
import { Col, Row } from 'react-bootstrap';


const CartItemList = () => {
    const { cart, products } = useSelector((store) => store, shallowEqual);
    let total = 0;

    return (
        <div className="container text-center">
            <h1 className="text-secondary">Your Shopping Cart</h1>
            <Row className="justify-content-center mt-4">
                <Col>
                {(Object.keys(cart).length !== 0) ?
                (
                   <div>
                    {Object.keys(cart).map((id) => {
                        total += (cart[id]) * (products[id].price);
                        return (
                        <CartItem
                            name={products[id].name}
                            src={products[id].image_url}
                            price={products[id].price}
                            desc={products[id].description}
                            key={products[id].name}
                            qty={cart[id]}
                            id={id}
                        />
                        )})}
                        </div>
                ) :
                        <div>
                            <h2 className="text-danger"> Your cart is empty </h2>
                        </div>
                }  

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