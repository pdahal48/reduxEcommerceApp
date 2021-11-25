import React from "react";
import Item from './Item'
import { Row, Col } from 'react-bootstrap';
import { useSelector, shallowEqual } from "react-redux";
import './item.css'

const Products = () => {
    const products  = useSelector((store) => store.products, shallowEqual);
    return (
        <div className="mt-5">
        <Row>
        <Col className="card-wrapper">
            {Object.keys(products).map(id => (
                <Item
                    name={products[id].name}
                    src = {products[id].image_url}
                    price = {products[id].price}
                    desc = {products[id].description}
                    key={products[id].name}
                    id = {id}
                />
            ))}
        </Col>
        </Row>
        </div>
    )
}

export default Products;