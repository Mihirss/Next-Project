import React from "react";
// im } from "react-router-dom";

// import './index.css';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-light bg-transparent">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to="/">Mr.Xmen</Link>
                                    <ul id="navbar" className="navbar-nav">
                                        <li  className="nav-item">
                                            <Link exact className="nav-link" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link exact className="nav-link" to="/Feed">Feed</Link>
                                        </li>
                                    </ul>
                                </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;