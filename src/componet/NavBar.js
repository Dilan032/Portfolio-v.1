import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/css/navBar.css'; //call another derectory
// import '../../src/sass/'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" >
            <div className="container-fluid">
                <a className="navbar-brand" href="https://www.linkedin.com/in/dilan-kanishka032/"><span className="HelloThere">Hello there 👋</span> <br />I'm Dilan Kanishka</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse ms-5" id="navbarNav">
                    <ul className="navbar-nav p-2 ms-5">
                        <li className="nav-item px-4">
                        <Link className="nav-link active" to="/home">Home</Link>
                        </li>
                        <li className="nav-item px-4">
                        <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item px-4">
                        <Link className="nav-link" to="/about">Skills</Link>
                        </li>
                        <li className="nav-item px-4">
                        <Link className="nav-link" to="/about">Products</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  );
}

// export default NavBar;