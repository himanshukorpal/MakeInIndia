const Fotter = () => {
  return (
    <div className="fotter-container">
      <div className="social-links-fotter">
        <a href="#" target="_blank" className="social-link">
          <i className="fab fa-twitter"></i>
          <span>Twitter</span>
        </a>
        <a href="#" target="_blank" className="social-link">
          <i className="fab fa-instagram"></i>
          <span>Instagram</span>
        </a>
        <a className="social-link" href="#">
          <i className="fab fa-facebook"></i>
          <span>Facebook</span>
        </a>
      </div>
      <p className="copyright">&copy; Make In India 2024</p>
    </div>
  );
};

export default Fotter;
