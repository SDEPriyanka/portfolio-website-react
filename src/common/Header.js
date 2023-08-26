import React from "react";
 
function Header() {
  return (
    <div className="Header">
     <div className="section2">
        <nav className="navbar navbar-expand-lg navbar-light bg-light m-0">
          <div className="container-fluid">
            <a className="navbar-brand pe-5" href="#">
              <div className="logo">
                <img
                  src="https://cdn.bestfreehtmlcsstemplates.com/uploads/authors/5b553be9c9a70.jpg"
                  alt="logo"
                />
              </div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <div className="nav-link">
                <ul className="navbar-nav">
                  <li className="nav-item">
                  
                    {/* <NavLink to="/" activeclassname="active" className="nav-link">
                Home
              </NavLink> */}
                  </li>
                  <li className="nav-item">
                  {/* <NavLink to="about" className="nav-link" >About</NavLink> */}
                  </li>
                  <li className="nav-item">
                  {/* <NavLink to="about" className="nav-link" >Services</NavLink> */}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Work
                    </a>
                  </li>
                  <li className="nav-item">
                  {/* <NavLink to="/contact">Contact</NavLink> */}
                  </li>
                </ul>
              </div>

              <div className="nav-btn">
                <li className="nav-item p-2">
                  <a className="nav-link active  card  " href="#">
                    Signup
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a className="nav-link active  card " href="#">
                    Login
                  </a>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
