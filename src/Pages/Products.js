import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch('http://localhost:9000/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }
  const handleEdit = (productId) => {
    const editedProduct = {
      title: 'Updated Title',
      description: 'Updated Description',
      price: 99.99, // Updated price value
    };
  
    fetch(`http://localhost:9000/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedProduct),
    })
      .then((res) => {
        if (res.ok) {
          Swal.fire({
            title: "Edit Successfully",
            icon: "success"
          });
          getAllProducts(); // Refresh product list after edit
        } else {
          throw new Error('Failed to edit product');
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error"
        });
      });
  };
  

  const deleteProduct = (productId) => {
    Swal.fire({
      title: "Are You Sure to Delete IT?",
      showCancelButton: true
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://localhost:9000/products/${productId}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted Successfully",
              icon: "success"
            });
            getAllProducts();
          })
          .catch((error) => {
            Swal.fire({
              title: "Error",
              text: "Failed to delete the product",
              icon: "error"
            });
          });
      } else {
        Swal.fire({
          title: "Canceled",
          icon: "error"
        });
      }
    });
  };

  return (
    <>
      <h1>Products Page</h1>
      <Link to={'/products/add'} className="btn btn-success mt-3">Add New Product</Link>
      <table className="table table-striped mt-5 product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description ? product.description.slice(0, 60) + '...' : 'Description Not Available'}</td>
              <td>{product.price} $</td>
              <td>
                <Link to={`/products/edit/${product.id}`} className="btn btn-primary"onClick={()=>handleEdit(product.id)} >Edit</Link>
                <button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Delete</button>
                <Link to={`/products/${product.id}`} className="btn btn-info">View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Products;
