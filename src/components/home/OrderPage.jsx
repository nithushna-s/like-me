import React from 'react';

const OrderPage = () => {
    const [products, setProducts] = React.useState([]);
    const [orderSubmitted, setOrderSubmitted] = React.useState(false);

    React.useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('cart')) || [];
        setProducts(storedProducts);
    }, []);

    const calculateTotal = () => {
        return products.reduce((total, product) => total + (product.price * product.quantity), 0);
    };

    const handleRemoveProduct = (id) => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
        localStorage.setItem('cart', JSON.stringify(updatedProducts));
        window.location.reload();

    };

    const handleQuantityChange = (id, newQuantity) => {
        const updatedProducts = products.map(product =>
            product.id === id ? { ...product, quantity: newQuantity } : product
        );
        setProducts(updatedProducts);
        localStorage.setItem('cart', JSON.stringify(updatedProducts));
    };

    const handleIncreaseQuantity = (id) => {
        const updatedProducts = products.map(product =>
            product.id === id ? { ...product, quantity: product.quantity + 1 } : product
        );
        setProducts(updatedProducts);
        localStorage.setItem('cart', JSON.stringify(updatedProducts));
    };

    const handleDecreaseQuantity = (id) => {
        const updatedProducts = products.map(product =>
            product.id === id ? { ...product, quantity: Math.max(1, product.quantity - 1) } : product
        );
        setProducts(updatedProducts);
        localStorage.setItem('cart', JSON.stringify(updatedProducts));
    };

    const handleSubmitOrder = () => {
        console.log('Order submitted:', products);
        setOrderSubmitted(true);
        setProducts([]);
        localStorage.removeItem('cart');
        window.alert('Order submitted successfully!')
    };

    return (
        <div className="container" id="details2">
            <h1>Order Summary</h1>
            <div className="row ml-6">
                <div className="col-md-4" style={{ marginLeft: '15%' }}>
                    <div className="card shadow">
                        <div className="card-body">
                            <h2>Products</h2>
                            <ul className="product-list">
                                {products.map((product, index) => (
                                    <li key={product.id} className="d-flex align-items-center mb-3">
                                        <span>{index + 1}. </span>
                                        <span>{product.name} - RS.{product.price}</span>
                                        <div className="quantity-controls ml-auto">
                                            <button onClick={() => handleDecreaseQuantity(product.id)}>-</button>
                                            <span className="quantity-label">{product.quantity}</span>
                                            <button onClick={() => handleIncreaseQuantity(product.id)}>+</button>
                                        </div>
                                        <span className="btn btn-danger ml-2" onClick={() => handleRemoveProduct(product.id)}>Remove</span>
                                    </li>
                                ))}
                            </ul>
                            <span>Total: RS.{calculateTotal()}</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2>Checkout Form</h2>
                            <form className="checkout-form" onSubmit={handleSubmitOrder}>
                                <button type="submit" className="btn" style={{ background: '#5f5f2d' }}>Submit Order</button>
                            </form>
                            {orderSubmitted && <p className="text-success">Order submitted successfully!</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
