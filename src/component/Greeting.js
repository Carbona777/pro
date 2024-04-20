import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Greeting() {
  let { productID } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:9000/products/${productID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Changed from product to data
        setProduct(data); // Set the product state with the fetched data
      });
  }, [productID]); // Include productID in the dependency array to fetch data when it changes

  console.log("Greeting");

  return (
    <>
      {product && (
        <div>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} />
        <h2> {product.price} $ </h2>
        </div>
      )}
    </>
  );
}

export default Greeting;
