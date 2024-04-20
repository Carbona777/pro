import { Button, Container ,Image} from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "./rtk/slicer";

function Cart(){
    const cart =useSelector(state=>state.cart);
const dispatch =useDispatch();
const totalPrice=cart.reduce((acc ,product)=>{
    acc+=product.price *product.quantity;
    return acc;
},0)
    return(
        <>
        <Container >
        <h1 className="py-5">
            Welcome to Cart
        </h1>
        <Button variant="primary" className="mb-3" onClick={()=>dispatch(clear())}>Clear</Button>
        <h4> TotalPrice :{totalPrice.toFixed(2)}$ </h4>
        <Table striped bordered hover variant="dark" className="py-3" >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Img</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th> Action</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((product)=>{
                    return(
                        <tr key={product.id}>
                            <td> {product.id} </td>
                            <td>{product.title}</td>
                            <td><Image src={product.image} style={{ height: '200px' }} alt={product.title} /></td>
                            <td>{product.price}$</td>
                            <td>  {product.quantity}</td>
                            <td><Button variant="danger" onClick={()=>dispatch(deleteFromCart(product))} >Delete</Button></td>
                        </tr>
                    )

                })}

               
            </tbody>
        </Table>
        </Container>
        </>
    )
}

export default Cart;
