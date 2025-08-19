import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Header from "../components/Header";

const Donate = () => {

    const [selectedAmount, setSelectedAmount] = useState(null);
    const [customAmount, setCustomAmount] = useState("");
    const [showCustom, setShowCustom] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [donationType, setDonationType] = useState(""); // track one_time vs recurring

    const handleAmountClick = (amount) => {
        setSelectedAmount(amount);
        setShowCustom(false);
    };

    const handleCustomAmountClick = () => {
        setShowCustom(true);
        setSelectedAmount(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        // choose API endpoint
        const endpoint =
            data.donation_type === "recurring"
                ? "https://afaw-beta-api.onrender.com/api/donations/subscribe"
                : "https://afaw-beta-api.onrender.com/api/donations/donate";

        try {
            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: data.donor_name,
                    email: data.donor_email,
                    amount: showCustom ? customAmount : selectedAmount,
                    currency: data.currency,
                    donation_type: data.donation_type,      // <-- add this
                    interval: data.interval,
                    recurring: data.donation_type === data.interval, // boolean flag
                }),
            });

            const json = await res.json();

            if (json.url) {
                // Stripe Checkout redirect
                window.location.href = json.url;
            } else {
                alert("Error creating donation session. Please try again.");
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong. Try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Reset custom amount if user goes back to preset
    useEffect(() => {
        if (!showCustom) setCustomAmount("");
    }, [showCustom]);

    return (
        <>
            <Helmet>
                <title>Donate | Africa Access Water</title>
                <meta
                    name="description"
                    content="Support our clean water projects through your generous donations."
                />
                <meta property="og:title" content="Donate to Africa Access Water" />
                <meta
                    property="og:description"
                    content="Your support brings clean, safe water to those in need."
                />
                <meta property="og:image" content="/images/og-donate.jpg" />
                <meta property="og:url" content={window.location.href} />
            </Helmet>

            <Layout>
                <Header title="Donate" current="donate" />
                <div
                    className="container-fluid donate my-5 py-5"
                    style={{
                        backgroundImage: `url('img/pipe.jpg')`,
                        backgroundAttachment: "fixed",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="container py-5">
                        <div className="row g-5 align-items-center">
                            {/* Left Side Text */}
                            <div className="col-lg-6">
                                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                                    Donate Now
                                </div>
                                <h1 className="display-6 text-white mb-4">
                                    Join Us in Making a Difference
                                </h1>
                                <p className="text-white mb-0">
                                    Two sites in Mphande and Rufunsa communities have been
                                    earmarked to install solar-powered water systems for productive
                                    use—year-round irrigation, drinking, and livestock. These will
                                    benefit over 2,300 people and 1,000 animals. We are raising{" "}
                                    <strong>US$93,000</strong>.
                                </p>
                                <p className="text-white mt-3">
                                    Your contribution helps fund sustainable infrastructure and
                                    builds long-term food security.
                                </p>
                                <p className="text-white mt-3">
                                    All donations are securely processed via{" "}
                                    <strong>Stripe & DPO Group</strong>. Thank you for empowering
                                    change.
                                </p>
                            </div>

                            {/* Right Side Form */}
                            <div className="col-lg-6">
                                <div className="h-100 bg-white p-5 rounded shadow-sm">
                                    <form onSubmit={handleSubmit}>
                                        {/* Donor Info */}
                                        <div className="form-group mb-3">
                                            <input
                                                type="text"
                                                name="donor_name"
                                                className="form-control"
                                                placeholder="Full Name"
                                                required
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

                                        {/* Donation Type + Currency */}
                                        <div className="form-group row mb-3">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <select
                                                    name="donation_type"
                                                    className="form-control"
                                                    value={donationType}
                                                    onChange={(e) => setDonationType(e.target.value)}
                                                    required
                                                >
                                                    <option value="">Select Donation Type</option>
                                                    <option value="one_time">One Time</option>
                                                    <option value="recurring">Recurring</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-6">
                                                <select
                                                    name="currency"
                                                    className="form-control"
                                                    defaultValue="USD"
                                                    required
                                                >
                                                    <option value="USD">USD</option>
                                                    <option value="ZMW">ZMW</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Interval field (only for recurring) */}
                                        {donationType === "recurring" && (
                                            <div className="form-group mb-3">
                                                <select name="interval" className="form-control" required>
                                                    <option value="">Select Interval</option>
                                                    <option value="day">Daily</option>
                                                    <option value="week">Weekly</option>
                                                    <option value="month">Monthly</option>
                                                    <option value="year">Yearly</option>
                                                </select>
                                            </div>
                                        )}

                                        {/* Amount */}
                                        <div className="form-group mb-4">
                                            <label className="form-label">Select Donation Amount</label>
                                            <div className="mb-2">
                                                {[10, 30, 50, 100].map((amount) => (
                                                    <button
                                                        key={amount}
                                                        type="button"
                                                        className={`btn btn-outline-primary me-2 amount-btn ${selectedAmount === String(amount) ? "active" : ""
                                                            }`}
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

                                        {/* Submit */}
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
