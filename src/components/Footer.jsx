import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white-50 footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">

          {/* Brand and Socials */}
          <div className="col-lg-3 col-md-6">
            <Link to="/" className="navbar-brand ms-4 ms-lg-0">
              <img
                src="/img/logos/afaw-logo-africa.png"
                alt="afaw-logo-africa"
                className="img-fluid"
                style={{ width: '50px', height: '50px' }}
              />
            </Link>
            <p>
              We empower rural communities in Africa with solar-powered water
              infrastructure for sustainable development and dignity.
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-square me-1" href="#"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-square me-1" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-square me-1" href="#"><i className="fab fa-youtube"></i></a>
              <a className="btn btn-square me-0" href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Contact Us</h5>
            <p><i className="fa fa-map-marker-alt me-3"></i>Lot 5676/M/6, Lusaka West, Lusaka, Zambia</p>
            <p><i className="fa fa-phone-alt me-3"></i>+260 211 231 174 / +260 976 944 695</p>
            <p><i className="fa fa-envelope me-3"></i>info@africaaccesswater.org</p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Quick Links</h5>
            <Link className="btn btn-link" to="/about">About Us</Link>
            <Link className="btn btn-link" to="/contact">Contact Us</Link>
            <Link className="btn btn-link" to="/services">What We Do</Link>
            <Link className="btn btn-link" to="/donate">Donate</Link>
            <Link className="btn btn-link" to="/privacy">Privacy Policy</Link>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Subscribe</h5>
            <p>Get updates on our projects, impact stories, and upcoming events.</p>
            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
              <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="email"
                placeholder="Your email"
              />
              <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-fluid copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <Link to="#">Africa Access Water</Link>, All Rights Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By <a href="https://htmlcodex.com">HTML Codex</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
