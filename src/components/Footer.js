export default function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer-heading">Contact Me</h3>

      <div className="footer-links">
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <img src="/fb.png" alt="Facebook" className="footer-icon" />
        </a>

        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <img src="/github-icon.png" alt="GitHub" className="footer-icon" />
        </a>
      </div>

      <div className="footer-info">
        <p>
          <span className="footer-symbol">📱</span> 0945-106-5035
        </p>
        <p>
          <span className="footer-symbol">✉️</span> angelitoflordeliza@gmail.com
        </p>
      </div>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Angel. All rights reserved.
      </p>
    </footer>
  );
}
