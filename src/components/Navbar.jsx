import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "nav-link active" : "nav-link";
    };

    return (
        <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
            {/* Top Bar */}
            <div className="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex">
                <div className="col-lg-8 px-5 text-start">
                    <div className="d-flex align-items-center flex-wrap gap-3">
                        <small id="google_translate_element"></small>
                        <small><i className="fa fa-map-marker-alt me-2"></i>Lot 5676/M/6, Lusaka West, Lusaka, Zambia</small>
                        <small><i className="fa fa-envelope me-2"></i>info@africaaccesswater.org</small>
                    </div>
                </div>
                <div className="col-lg-4 px-5 text-end">
                    <a className="text-white-50 ms-3" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="text-white-50 ms-3" href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a className="text-white-50 ms-3" href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <Link to="/" className="navbar-brand ms-4 ms-lg-0">
                    <img
                        src="/img/logos/afaw-logo-africa.png"
                        alt="afaw-logo-africa"
                        className="img-fluid"
                        style={{ width: 50, height: 50 }}
                    />
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" className={`nav-item ${isActive("/")}`}>Home</Link>
                        <Link to="/about" className={`nav-item ${isActive("/about")}`}>About Us</Link>
                        <Link to="/our-work" className={`nav-item ${isActive("/our-work")}`}>Our Work</Link>
                        <Link to="/blogs" className={`nav-item ${isActive("/blogs")}`}>Blogs</Link>
                        <Link to="/contact" className={`nav-item ${isActive("/contact")}`}>Contact</Link>

                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
                            <div className="dropdown-menu m-0">
                                <Link to="/projects" className="dropdown-item">Projects</Link>
                                <Link to="/donate" className="dropdown-item">Donate</Link>
                                <Link to="/team" className="dropdown-item">Our Team</Link>
                                <Link to="/reports" className="dropdown-item">Reports</Link>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-lg-flex ms-2">
                        <Link className="btn btn-outline-primary py-2 px-3" to="/donate">
                            Donate Now
                            <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                <i className="fa fa-arrow-right"></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
