import React, {useState} from 'react'
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import CartItem from './CartItem';
import { Col, Row } from 'react-bootstrap';
import { applyDiscount } from "./actions";
import './cartItemList.css'


const CartItemList = () => {
    const { cart, products, discountAmount, discountApplied, cartValue } = useSelector((store) => store, shallowEqual);

    const [discount, setDiscount] = useState("");
    const dispatch = useDispatch();

    function handleChange(evt) {
        setDiscount(evt.target.value);
    }
    
    function handleDiscount(evt) {
        evt.preventDefault();
        dispatch(applyDiscount(discount));
        setDiscount("");
    }

    return (
        <div className="container text-center">
            <h1 className="text-secondary">Your Shopping Cart</h1>
            <Row className="justify-content-center mt-4">
                <Col>
                {(Object.keys(cart).length !== 0) ?
                (
                   <div>
                    {Object.keys(cart).map((id) => {
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
                <Col className="col-4 card cart-card">
            <h2 className="text-dark"> Cart Summary </h2>
            <div>
                    <b>Subtotal: ${cartValue}</b>
                    {discountApplied ? (
                        <div className="text-success">
                            Your Savings:  {(discountAmount * 100).toFixed(0)}%
                        </div>
                    ) : null }
                    <form onSubmit={handleDiscount}>
                        <Row className="container justify-content-center mt-3">
                            <Col className="col-4">
                                <label htmlFor="discount">Promo Code:</label>
                            </Col>
                            <Col className="col-6">
                                <input
                                    id="discount"
                                    name="discount"
                                    className="form-control"
                                    value={discount}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row className="justify-content-center ">
                            <Col className="promo-btn">
                                <button className="promo-btn btn btn-primary">Apply Discount</button>
                            </Col>
                        </Row>
                    </form>
                <div>
                    <button 
                        className="btn checkout-btn btn-outline-success mt-4"
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