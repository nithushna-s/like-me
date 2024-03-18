import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('cart')) || [];
        setCartCount(storedProducts.length);
    }, []);

    return (
      <>
        <nav className="navbar navbar-expand-lg fixed-top " id='first'>
            <div className="container">
                <a className="navbar-brand" href="/" id='Nav'>likeme</a>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/" id='myul'>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products" id='myul'>Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id='myul'>Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " id='myul' href='#contact'>Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/order">
                                <i className="fas fa-shopping-cart"></i>
                                <span className="badge ">{cartCount}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <nav ></nav>
        </>
    );
}

export default CustomNavbar;
