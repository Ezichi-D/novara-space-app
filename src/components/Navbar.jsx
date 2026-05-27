import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <a href="/" className="nav-logo-link">
          <img
            className="logo"
            src="https://res.cloudinary.com/jasond/image/upload/v1770026324/graphics_fcihct.png"
            alt="logo"
          />
        </a>
      </div>

      <div>
        <a href="/">Home</a>
        <a href="#planets">Planets</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;