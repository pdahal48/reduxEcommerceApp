import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Item from './Item'
import { Card, Button, Row, Col } from 'react-bootstrap';
import './item.css'


const Products = () => {
    const products = useSelector(state => state.products);

    return (
        <div>
            <Row>
                <Col className="card-wrapper">
                    {Object.values(products).map((p) => (
                        <Item
                            name={p.name}
                            src = {p.image_url}
                            price = {p.price}
                            desc = {p.description}
                            key={p.name}
                        />
                    ))}
                </Col>
            </Row>
        
        </div>
    )
}

export default Products;