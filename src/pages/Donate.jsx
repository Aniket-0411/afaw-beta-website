import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Header from "../components/Header";

const Donate = () => {
    const [selectedAmount, setSelectedAmount] = useState("10");
    const [showCustom, setShowCustom] = useState(false);
    const [customAmount, setCustomAmount] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleAmountClick = (amount) => {
        setSelectedAmount(amount);
        setShowCustom(false);
        setCustomAmount("");
    };

    const handleCustomAmountClick = () => {
        setShowCustom(true);
        setSelectedAmount("");
    };

    const handleSubmit = (e) => {
        e.target.Amount.value = showCustom ? customAmount : selectedAmount;
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (!showCustom) setCustomAmount("");
    }, [showCustom]);

    return (
        <>
            <Helmet>
                <title>Donate | Africa Access Water</title>
                <meta name="description" content="Support our clean water projects through your generous donations." />
                <meta property="og:title" content="Donate to Africa Access Water" />
                <meta property="og:description" content="Your support brings clean, safe water to those in need." />
                <meta property="og:image" content="/images/og-donate.jpg" />
                <meta property="og:url" content={window.location.href} />
            </Helmet>
            <Layout>
                <Header title="Donate" current="donate" />
                <div
                    className="container-fluid donate my-5 py-5"
                    style={{ backgroundImage: `url('img/pipe.jpg')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}
                >
                    <div className="container py-5">
                        <div className="row g-5 align-items-center">
                            {/* Left Text */}
                            <div className="col-lg-6">
                                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Donate Now</div>
                                <h1 className="display-6 text-white mb-4">Join Us in Making a Difference</h1>
                                <p className="text-white mb-0">
                                    Two sites in Mphande and Rufunsa communities have been earmarked to install solar-powered
                                    water systems for productive use—year-round irrigation, drinking, and livestock.
                                    These will benefit over 2,300 people and 1,000 animals. We are raising <strong>US$93,000</strong>.
                                </p>
                                <p className="text-white mb-0 mt-3">
                                    Your contribution helps fund sustainable infrastructure and builds long-term food security.
                                </p>
                                <p className="text-white mt-3">
                                    All donations are securely processed via <strong>Stripe & DPO Group</strong>.
                                    Thank you for empowering change.
                                </p>
                            </div>

                            {/* Right Form */}
                            <div className="col-lg-6">
                                <div className="h-100 bg-white p-5 rounded shadow-sm">
                                    <form
                                        action="https://secure.3gdirectpay.com/dpopayment.php"
                                        method="POST"
                                        onSubmit={handleSubmit}
                                    >
                                        <input type="hidden" name="CompanyToken" value="YOUR_COMPANY_TOKEN" />
                                        <input type="hidden" name="TransactionReference" value="TXN123456" />
                                        <input type="hidden" name="PaymentType" value="MERCHANT" />
                                        <input
                                            type="hidden"
                                            name="RedirectURL"
                                            value="https://beta.africaaccesswater.com/payment-success"
                                        />
                                        <input
                                            type="hidden"
                                            name="PaymentDescription"
                                            value="Donation to Solar Water Project"
                                        />
                                        <input type="hidden" name="Amount" value={showCustom ? customAmount : selectedAmount} required />

                                        <div className="form-group mb-3">
                                            <input
                                                type="text"
                                                name="donor_name"
                                                className="form-control"
                                                placeholder="Full Name (optional)"
                                                required
                                            />
                                        </div>

                                        <div className="form-group mb-3">
                                            <input
                                                type="text"
                                                name="organization_name"
                                                className="form-control"
                                                placeholder="Organization Name (optional)"
                                            />
                                        </div>

                                        <div className="form-group mb-3">
                                            <input
                                                type="email"
                                                name="donor_email"
                                                className="form-control"
                                                placeholder="Email Address"
                                                required
                                            />
                                        </div>

                                        <div className="form-group mb-3">
                                            <input
                                                type="text"
                                                name="physical_address"
                                                className="form-control"
                                                placeholder="Physical Address (optional)"
                                            />
                                        </div>

                                        <div className="form-group row mb-3">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <select name="donation_type" className="form-control" required>
                                                    <option value="">Select Donation Type</option>
                                                    <option value="one_time">One Time</option>
                                                    <option value="recurring">Recurring</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-6">
                                                <select name="Currency" className="form-control" required>
                                                    <option value="">Select Currency</option>
                                                    <option value="USD">USD</option>
                                                    <option value="ZMW">ZMW</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group mb-4">
                                            <label className="form-label">Select Donation Amount</label>
                                            <div className="mb-2">
                                                {[10, 30, 50, 100].map((amount) => (
                                                    <button
                                                        key={amount}
                                                        type="button"
                                                        className={`btn btn-outline-primary me-2 amount-btn ${selectedAmount === String(amount) ? 'active' : ''}`}
                                                        onClick={() => handleAmountClick(String(amount))}
                                                    >
                                                        {amount}
                                                    </button>
                                                ))}
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-primary"
                                                    onClick={handleCustomAmountClick}
                                                >
                                                    Other Amount
                                                </button>
                                            </div>
                                            {showCustom && (
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={customAmount}
                                                    onChange={(e) => setCustomAmount(e.target.value)}
                                                    className="form-control mt-2"
                                                    placeholder="Enter custom amount"
                                                    required
                                                />
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-user btn-block"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Processing..." : "Donate Now"}
                                        </button>

                                        {isSubmitting && (
                                            <div className="text-center mt-3">
                                                <div className="spinner-border text-primary" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>



    );
};

export default Donate;
