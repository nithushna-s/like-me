import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>Order now and embark on a flavorful journey with us!.</p>
          </div>
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
