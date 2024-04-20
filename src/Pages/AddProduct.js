// import axios from "axios";
// import { useState } from "react";

// function AddProduct() {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [image, setImage] = useState('');
//     const [price, setPrice] = useState('');
//     const [featured, setFeatured] = useState(false);

//     const formSubmit = (e) => {
//         e.preventDefault();
//         axios.post("http://localhost:9000/products", {
//             title,
//             description,
//             image,
//             price,
//             featured
//         }).then((data) => {
//             console.log(data);
//             window.location.reload();
//         }).catch((error) => {
//             console.error('Error:', error);
//         });
//     };

//     return (
//         <>
//             <h1>Add Product</h1>
//             <form onSubmit={formSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="title" className="form-label">Title</label>
//                     <input type="text" className="form-control" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="description" className="form-label">Description</label>
//                     <input type="text" className="form-control" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="price" className="form-label">Price</label>
//                     <input type="text" className="form-control" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="image" className="form-label">Image</label>
//                     <input type="file" className="form-control" id="image" name="image" onChange={(e) => setImage(e.target.value)} />
//                 </div>
//                 <div className="mb-3 form-check">
//                     <input type="checkbox" className="form-check-input" id="featured" name="featured" checked={featured} onChange={(e) => setFeatured(e.target.checked)} />
//                     <label htmlFor="featured" className="form-check-label">Featured Product</label>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </>
//     );
// }

// export default AddProduct;
