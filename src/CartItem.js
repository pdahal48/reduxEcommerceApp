import React from 'react'
import { Col, Stack } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { removeItem } from './actions'
import './CartItem.css'

const CartItem = ({ name, price, src, desc, id }) => {
    const dispatch = useDispatch();

    return (
        <div className="container card mb-3">
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
                        <b>QTY: 1 </b>
                    </div>
                </Col>
                <div className="cartItem-price ms-auto">
                    <div>
                        ${price}
                    </div>
                        <button 
                            className="btn btn-sm btn-primary"
                            onClick={()=> dispatch(removeItem({id: id}))}
                        >
                            Remove item
                        </button>
                </div>
            </Stack>
        </div>
    )
}

export default CartItem;