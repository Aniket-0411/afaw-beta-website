import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Header from "../components/Header";

const Contact = () => {


    return (

        <>
            <Helmet>
                <title>Contact Us | Africa Access Water</title>
                <meta name="description" content="Reach out to support our mission to provide clean water." />
                <meta property="og:title" content="Contact Africa Access Water" />
                <meta property="og:description" content="We're here to connect and collaborate on impactful water solutions." />
                <meta property="og:image" content="/images/og-contact.jpg" />
                <meta property="og:url" content={window.location.href} />
            </Helmet>
            <Layout>
                <Header title="Contact" current="contact" />
                <div className="container-xxl py-5 bg-light">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            {/* Contact Form */}
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <div className="d-inline-block rounded-pill bg-primary text-white py-1 px-3 mb-3">Get In Touch</div>
                                <h1 className="display-6 mb-4">We're here to help rural Africa access clean water</h1>
                                <p className="mb-4">
                                    Whether you want to partner, support, or inquire about our solar-powered water systems, feel free to
                                    contact us. We’re ready to respond.
                                </p>
                                <form id="contactForm">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    style={{ height: '120px' }}
                                                    required
                                                ></textarea>
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary py-2 px-4">
                                                Send Message <i className="fa fa-paper-plane ms-2"></i>
                                            </button>
                                            <div id="formStatus" className="mt-3 text-success d-none">
                                                Message sent successfully!
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {/* Google Map */}
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <div className="position-relative rounded overflow-hidden shadow" style={{ minHeight: '450px' }}>
                                    <iframe
                                        className="position-relative w-100 h-100"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771090.1469689243!2d24.298088950000004!3d-13.1338977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f3ba6d6c85cd%3A0x64be9f6c48c34aeb!2sZambia!5e0!3m2!1sen!2szm!4v1623857587085!5m2!1sen!2szm"
                                        frameBorder="0"
                                        allowFullScreen=""
                                        loading="lazy"
                                        style={{ border: 0, minHeight: '450px' }}
                                        title="Zambia Map"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>


    );
};

export default Contact;
