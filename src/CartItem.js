import React from 'react'
import { Col, Stack, Row } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { removeItem } from './actions'
import './CartItem.css'

const CartItem = ({ name, price, src, desc, id, qty }) => {
    const dispatch = useDispatch();

    function remove() {
        dispatch(removeItem(id))
    }

    return (
        <div className="container-fluid justify-content-center mb-3">
            <Row className="justify-content-center">
            <Col className="card">
            <Stack direction="horizontal" gap={3}>
                <div className="bg-light border">
                    <img src={src} alt={name} className="cartItem-img"/>
                </div>
                <Col>
                    <div className="cartItem-name">
                       {name.toUpperCase()}
                    </div>
                    <div className="col-12">
                        {desc}
                    </div>
                    <div>
                        <b>QTY: {qty} </b>
                    </div>
                    <button 
                            className="btn btn-sm btn-primary"
                            onClick={remove}
                        >
                            Remove item
                        </button>
                </Col>
                <div className="cartItem-price ms-auto">
                    <div>
                        ${price}
                    </div>

                </div>
            </Stack>
                
            </Col>
        
        </Row>
        </div>
    )
}

export default CartItem;