import React from 'react'
import { Row, Col, Stack } from 'react-bootstrap';
import './CartItem.css'

const CartItem = ({ name, price, src, desc }) => {
    return (
        <div className="container card mb-3">
            {/* <Row>
                <Col className="col-3">
                    <img src={src} alt={name} className="cartItem-img"/>
                </Col>
                <Col className="col-3 mt-5">
                    <div className="cartItem-name">
                        Item: {name.toUpperCase()}
                    </div>
                    Description: {desc}
                </Col>
                <Col className="col-6 mt-5 align-items-end">
                    ${price}
                </Col>
            </Row> */}

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
                        <b>QTY: 2 </b>
                    </div>
                </Col>
                <div className="cartItem-price ms-auto">
                    ${price}
                </div>
            </Stack>
        </div>
    )
}

export default CartItem;