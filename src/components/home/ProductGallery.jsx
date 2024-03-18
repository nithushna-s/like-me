import React from 'react';
import { Link } from 'react-router-dom';
import Slide1 from '../../image/small1.jpg';
import Slide2 from '../../image/small2.webp';
import Slide3 from '../../image/small6.avif';
import Slide4 from '../../image/small7.jpg';
import Slide5 from '../../image/small8.webp';
import Slide6 from '../../image/small3.jpg';

const ProductGallery = () => {
  const products = [
    { id: 1, name: "Burger", imageUrl: Slide1, price: 350, quantity: 5 },
    { id: 2, name: "Chicken Satay", imageUrl: Slide2, price: 450, quantity: 8 },
    { id: 3, name: "Szechuan Noodles", imageUrl: Slide3, price: 350, quantity: 3 },
    { id: 4, name: "French Fries", imageUrl: Slide4, price: 250, quantity: 6 },
    { id: 5, name: " Popcorn ", imageUrl: Slide5, price: 200, quantity: 8 },
    { id: 6, name: " Pizza ", imageUrl: Slide6, price: 1500, quantity: 3 }
  ];
  React.useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, []);
  
  const handleAddToCart = (product) => {
    const storedProducts = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedProducts = [...storedProducts, product];
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
    console.log(`Added ${product.name} to cart`);
    window.location.reload();

  };

  return (
    <div className="container " id="product">
        <h1 style={{marginTop:'10px'}}> All products</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="product-card">
              <img src={product.imageUrl} className="product-img" alt={product.name} />
              <div className="card-body">
                <h5 className="product-title">{product.name}</h5>
                <p className="product-price">Price: RS.{product.price}</p>
                <p className="product-quantity">Quantity: {product.quantity}</p>
                <div className="product-buttons">
                  <Link to={`/products/${product.id}`} className="btn" id="view">View Details</Link>
                  <button className="btn order-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
