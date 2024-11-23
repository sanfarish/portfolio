
export default function Nav() {

  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "#084887" }} data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center gap-3" href="#">
          <img src="/favicon.svg" alt="FH Logo" width="40" height="40" className="d-inline-block align-text-top" />
          Faris Hasan
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Overview</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
