import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { db } from '../Firebase/firebase';

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    const productCollection = collection(db, 'productdatabase');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = { title, description, price: parseFloat(price), image };
        try {
            await addDoc(productCollection, productData);
            alert('Product added successfully');
            navigate('/Product');
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Error adding product');
        }
    };
    return (
        <div className="add-product-container">
            <div className="add-product-form">
                <h1>Add Product</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Product Title" required />
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Product Description" required />
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product Price" required />
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter Product Image URL" required />
                    <button type="submit">Add Product</button>
                </form>
            </div>
            <div className="product-preview">
                <h2>Product Preview</h2>
                <div className="preview-card">
                    <img src={image} alt={title} style={{ width: '200px', height: '200px' }} />
                    <h3>Title: {title || 'Title Here'}</h3>
                    <p>Description: {description || 'Description Here'}</p>
                    <p>Price: {price ? `${price}` : 'Price Here'} Rs.</p>
                </div>
            </div>
        </div>
    );
}

export default AddProduct