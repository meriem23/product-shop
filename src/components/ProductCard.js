import React from 'react'
import { useDispatch } from "react-redux"
import ReactStars from "react-rating-stars-component";
import { deleteProduct } from "../actions/ProductActions"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { MdDeleteForever } from "react-icons/md";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    return (
        <Card className="prodcut-card">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{product.category}</ListGroup.Item>
                <ListGroup.Item>{`${product.price} $`}</ListGroup.Item>
                <ListGroup.Item>
                    <ReactStars
                        value={product.rating}
                        size={24}
                        edit={false}
                        activeColor="#ffd700"
                    />
                </ListGroup.Item>
            </ListGroup>
            <Button style={{ backgroundColor: 'red', border: "none" }}
                onClick={() => dispatch(deleteProduct(product.id))}
            >
                <MdDeleteForever />
            </Button>
        </Card>
    )
}

export default ProductCard