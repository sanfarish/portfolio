
export default function Nav() {

  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "#084887" }} data-bs-theme="dark">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img src="/favicon.svg" alt="FH Logo" width={40} height={40} className="d-inline-block align-text-top" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myNavbar"
          aria-controls="myNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="myNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Overview</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacts">Contacts</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">Guestbook</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
