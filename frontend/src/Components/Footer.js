import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-title">Life Care Pharma.</h2>
          <p>
            Your trusted healthcare partner, providing quality medical services
            with care and compassion.
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:marjunpellakuru@gmail.com">
              xxxxxxxxxxxx@gmail.com
            </a>
          </p>
          <p>
            Phone: <a href="tel:+91 9XXXX XXXXX">+91 9XXXX XXXXX</a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Visit Us</h3>
          <p>📍 Beside Yxxxxx Xxxxxxxx, Xxxx Xxxx, Xxxx.</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        © 2025 Life Care Pharma | Your Health, Our Priority | All Rights
        Reserved.
      </div>
    </footer>
  );
}
