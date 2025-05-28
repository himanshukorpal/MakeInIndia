import { India } from "../utils/imageURL";

const Header = () => {
  return (
    <div className="header">
      <div className="nav1">
        <div className="social-links">
          <a href="#" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <div className="logo">
          <img src={India} alt="Handicraft" className="icon"></img>
          <h1>
            Make In <span>India</span>
          </h1>
        </div>
      </div>
      <ul className="navbar">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Blogs</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
