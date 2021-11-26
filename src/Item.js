import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { addItem } from './actions'
import { useDispatch } from "react-redux";
import './item.css'

const Item = ({ id, name, price, src, desc }) => {

    const dispatch = useDispatch();
    function add() {
        return dispatch(addItem(id));
    }

    return (
        <div>
            <Card className="product-card">
                <Row className="justify-content-center">
                    <Col className="col-10">
                        <Card.Img variant="top" src={src} className="product-image"/>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12">
                        <Card.Title className = "text-left">{name}</Card.Title>
                    </Col>
                </Row>
                <Row>
                    <Col className="m-0">
                        {desc}
                    </Col>
                </Row>
                <Row>
                    <Col className="m-0 price">
                        ${price}
                    </Col>
                </Row>
                    <button onClick={add} className="btn btn-outline-danger"> Add </button>
            </Card>
      </div>
    )
}

export default Item;