import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const foundProduct = storedProducts.find(prod => prod.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }
  const handleAddToCart = (product) => {
    const storedProducts = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedProducts = [...storedProducts, product];
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
    console.log(`Added ${product.name} to cart`);
    window.location.reload();

  };

  return (
    <div className="container " id="detais1">
    <h1 >Product Details</h1>
    {product && (
      <div className="row ">
        <div className="col-md-6 ">
          <img src={product.imageUrl} className="img-fluid" alt={product.name} />
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Product ID: {product.id}</p>
              <p className="card-text">Price:RS.{product.price}</p>
              <p className="card-text">Quantity: {product.quantity}</p>
              <button className="btn order-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>

            </div>
          </div>
        </div>
      </div>
    )}
  </div>

  );
};

export default ProductDetails;
