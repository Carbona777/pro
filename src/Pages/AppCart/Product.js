import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, fetchProducts } from './rtk/slicer';

function Product() {
    const products = useSelector((state) => state.products);
    const isLoading = useSelector((state) => state.isLoading); // Assuming you have a loading state in Redux
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('Fetching products...');
        dispatch(fetchProducts());
    }, [dispatch]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    console.log('Products:', products);

    return (
        <Container className='py-8'>
            <Row className='py-6'>
                {products.map((product) => (
                    <Col key={product.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{height:'300px'}} variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text>{product.price}$</Card.Text>
                                <Button variant="primary" onClick={()=> dispatch(addToCart(product))}  >Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Product;
