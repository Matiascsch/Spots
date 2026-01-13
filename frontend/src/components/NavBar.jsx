function NavBar() {
  return (
    <nav className="nav">
      <div className="brand">Nestify</div>
      <div className="nav-links">
        <button className="ghost-btn" type="button">
          Explorar
        </button>
        <button className="ghost-btn" type="button">
          Ayuda
        </button>
        <button className="solid-btn" type="button">
          Ingresar
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
