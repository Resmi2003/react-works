import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          
          {/* Brand Section */}
          <div className="footer-section brand-info">
            <h2 className="logo">
              <i className="fa-solid fa-cart-shopping"></i> E-Cart
            </h2>
            <p>
              Your one-stop destination for quality products at the best prices. 
              Fast delivery, secure payment and trusted service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/cart">Cart</a></li>
              <li><a href="/wishlist">Wishlist</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} E-Cart. All Rights Reserved.</p>
        </div>
      </footer>

      <style>{`
        /* 1. The green bar - stays full width */
        .footer {
          background: #28a745; 
          color: #ffffff;
          padding: 60px 0 30px 0;
          width: 100%;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        /* 2. The content container - this fixes the left/right space */
        .footer-container {
          max-width: 1100px;    /* Limits how far the text spreads */
          margin: 0 auto;       /* Centers the container perfectly */
          display: flex;
          justify-content: space-between; /* Puts equal space between columns */
          flex-wrap: wrap;
          padding: 0 20px;      /* Prevents text from touching screen edges on mobile */
          gap: 40px;
        }

        .footer-section {
          flex: 1;
          min-width: 150px;
          text-align: left;
        }

        /* Makes the first column slightly wider for the description */
        .brand-info {
          flex: 1.5; 
        }

        .logo {
          font-size: 22px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: bold;
        }

        .footer-section h3 {
          font-size: 16px;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .footer-section p {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-section ul li {
          margin-bottom: 12px;
        }

        .footer-section ul li a {
          text-decoration: none;
          color: #fff;
          font-size: 14px;
          transition: 0.3s;
          opacity: 0.8;
        }

        .footer-section ul li a:hover {
          opacity: 1;
        }

        .social-icons {
          display: flex;
          gap: 15px;
        }

        .social-icons a {
          color: #fff;
          font-size: 18px;
          transition: 0.3s;
        }

        .social-icons a:hover {
          transform: scale(1.2);
        }

        /* 3. The bottom copyright bar */
        .footer-bottom {
          text-align: center;
          margin-top: 50px;
          padding-top: 25px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          font-size: 13px;
        }

        /* Responsive Fix for Mobile */
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }
          .footer-section {
            text-align: center;
          }
          .social-icons {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;