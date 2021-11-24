import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './item.css'

const Item = ({ name, price, src, desc }) => {
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
                    <button className="btn btn-outline-danger"> Add </button>
            </Card>
      </div>
    )
}

export default Item;