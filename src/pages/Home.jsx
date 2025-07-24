// src/pages/About.jsx
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import VisionMissionObjectives from "../components/VisionMissionObjectives ";

function Home() {
    return (
        <>

            <Helmet>
                <title>Africa Access Water | Home</title>
                <meta name="description" content="Empowering rural communities with clean water solutions." />
                <meta property="og:title" content="Africa Access Water" />
                <meta property="og:description" content="Empowering rural communities with solar-powered water systems." />
                <meta property="og:image" content="/images/og-home.jpg" />
                <meta property="og:url" content={window.location.href} />
            </Helmet>

            <Layout title="Africa Access Water" description="Learn how Africa Access Water empowers rural Africa with solar-powered water systems.">
                {/* Carousel Start */}
                <Carousel
                  slides={[
                    {
                      img: "img/hero.jpg",
                      alt: "Rural Community with Water System",
                      title: "Empowering Africa Through Water",
                      desc:
                        "We build solar-powered water infrastructure to improve food security, income, and climate resilience across rural Africa.",
                      buttonText: "Explore Our Work",
                      buttonLink: "our-work.html",
                    },
                    {
                      img: "img/about.jpg",
                      alt: "Women Empowerment in Agriculture",
                      title: "Water is Life. Empowerment is Impact.",
                      desc:
                        "Join us in empowering women, youth, and farmers with clean water for agriculture and economic independence.",
                      buttonText: "Donate Now",
                      buttonLink: "donate.html",
                    },
                  ]}
                />
                {/* Carousel End */}

                {/* Stats Start */}
                <div className="container-xxl py-5 bg-light">
                    <div className="container">
                        <div className="row g-4 justify-content-center">
                            {/* Stat 1 */}
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="bg-white text-center border rounded p-4">
                                    <div className="mb-3">
                                        <i className="fa fa-solar-panel fa-2x text-primary"></i>
                                    </div>
                                    <h2 className="text-primary mb-1">9</h2>
                                    <p className="mb-0">Solar-powered Water Infrastructure in 4 project sites</p>
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="bg-white text-center border rounded p-4">
                                    <div className="mb-3">
                                        <i className="fa fa-users fa-2x text-primary"></i>
                                    </div>
                                    <h2 className="text-primary mb-1">600</h2>
                                    <p className="mb-0">(5,000 People) Households food secure with income</p>
                                </div>
                            </div>

                            {/* Stat 3 */}
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="bg-white text-center border rounded p-4">
                                    <div className="mb-3">
                                        <i className="fa fa-tint fa-2x text-primary"></i>
                                    </div>
                                    <h2 className="text-primary mb-1">20,000</h2>
                                    <p className="mb-0">People & 2,500 Animals with clean drinking water</p>
                                </div>
                            </div>

                            {/* Stat 4 */}
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="bg-white text-center border rounded p-4">
                                    <div className="mb-3">
                                        <i className="fa fa-dollar-sign fa-2x text-primary"></i>
                                    </div>
                                    <h2 className="text-primary mb-1">US190,000</h2>
                                    <p className="mb-0">Annual community income from produce</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Stats End */}

                <VisionMissionObjectives/>
                
                {/* About Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5">
                            {/* Image Section */}
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="position-relative overflow-hidden h-100" style={{ minHeight: "400px" }}>
                                    <img className="position-absolute w-100 h-100 pt-5 pe-5" src="img/solar.jpg" alt="Solar Water Project" style={{ objectFit: "cover" }} />
                                    <img className="position-absolute top-0 end-0 bg-white ps-2 pb-2" src="img/happy-produce.jpg" alt="Women Farmers" style={{ width: "200px", height: "200px" }} />
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="h-100">
                                    <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">About Us</div>
                                    <h1 className="display-6 mb-5">Empowering Rural Africa Through Solar-Powered Water Solutions</h1>

                                    <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                                        <p className="text-dark mb-2">
                                            "Water is the foundation of life and opportunity. At Africa Access Water, we believe
                                            that when rural communities have access to clean, sustainable water, they can rise
                                            beyond poverty and hunger."
                                        </p>
                                        <span className="text-primary">Rodney Katongo, Co-Founder & CEO</span>
                                    </div>

                                    <p className="mb-5">
                                        Africa Access Water (AfAW) is a nonprofit organization based in Zambia, founded in 2019.
                                        We implement solar-powered water infrastructure to help communities achieve food
                                        security, increase income, and build resilience to climate change. Our programs empower
                                        women, youth, and farmers across Zambia and beyond.
                                    </p>

                                    <a className="btn btn-primary py-2 px-3 me-3" href="about.html">
                                        Learn More
                                        <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                            <i className="fa fa-arrow-right"></i>
                                        </div>
                                    </a>
                                    <a className="btn btn-outline-primary py-2 px-3" href="contact.html">
                                        Contact Us
                                        <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                            <i className="fa fa-arrow-right"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}

                {/* Causes Start */}
                <div className="container-xxl bg-light my-5 py-5">
                    <div className="container py-5">
                        <div
                            className="text-center mx-auto mb-5 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{ maxWidth: '600px' }}
                        >
                            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                                Be Part of a Project
                            </div>
                            <h1 className="display-6 mb-4">
                                Together, We Build Resilience Through Clean Water and Opportunity
                            </h1>
                        </div>

                        <div className="row g-4 justify-content-center">
                            {[
                                {
                                    delay: '0.1s',
                                    title: 'Solar-Powered Water Infrastructure',
                                    desc:
                                        'We install sustainable solar-powered water systems in rural Zambia, ensuring clean water for households, farms, and livestock.',
                                    goal: 15000,
                                    raised: 11200,
                                    tag: 'Water Access',
                                    img: 'img/solar.jpg',
                                    alt: 'Solar water pump project',
                                },
                                {
                                    delay: '0.3s',
                                    title: 'Irrigated Plots for Rural Women',
                                    desc:
                                        'We support women-led agriculture by providing access to irrigated plots, training, and financial inclusion through savings groups.',
                                    goal: 12000,
                                    raised: 9000,
                                    tag: 'Women Empowerment',
                                    img: 'img/irrigated.jpeg',
                                    alt: 'Women farming project',
                                },
                                {
                                    delay: '0.5s',
                                    title: 'Skills for Water & Solar Maintenance',
                                    desc:
                                        'We train youth in solar system maintenance, irrigation technologies, and entrepreneurship to ensure local sustainability.',
                                    goal: 8000,
                                    raised: 6400,
                                    tag: 'Youth Training',
                                    img: 'img/irrigated 1.jpg',
                                    alt: 'Youth technical training',
                                },
                            ].map((cause, index) => (
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={cause.delay} key={index}>
                                    <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
                                        <div className="text-center p-4 pt-0">
                                            <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                                                <small>{cause.tag}</small>
                                            </div>
                                            <h5 className="mb-3">{cause.title}</h5>
                                            <p>{cause.desc}</p>
                                            <div className="causes-progress bg-light p-3 pt-2">
                                                <div className="d-flex justify-content-between">
                                                    <p className="text-dark">
                                                        ${cause.goal.toLocaleString()} <small className="text-body">Goal</small>
                                                    </p>
                                                    <p className="text-dark">
                                                        ${cause.raised.toLocaleString()} <small className="text-body">Raised</small>
                                                    </p>
                                                </div>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: `${(cause.raised / cause.goal) * 100}%` }}
                                                        aria-valuenow={(cause.raised / cause.goal) * 100}
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    >
                                                        <span>{Math.round((cause.raised / cause.goal) * 100)}%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="position-relative mt-auto">
                                            <img className="img-fluid" src={cause.img} alt={cause.alt} />
                                            <div className="causes-overlay">
                                                <a className="btn btn-outline-primary" href="#">
                                                    Read More
                                                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                                        <i className="fa fa-arrow-right"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>






            </Layout>
        </>

    );
}

export default Home;
