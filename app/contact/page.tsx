"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "#fff", color: "#111", fontFamily: "Inter, sans-serif", minHeight: "100vh" }}>
      {/* Announcement Bar */}
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          fontSize: "10px",
          fontWeight: "700",
          letterSpacing: "0.2em",
          textAlign: "center",
          padding: "10px 16px",
          textTransform: "uppercase",
        }}
      >
        PREMIUM CUSTOM SPORTSWEAR. 12 PCS MINIMUM
      </div>

      {/* Hero Section with Background Image & Navigation Overlay */}
      <div style={{ position: "relative", minHeight: "88vh", display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden", backgroundColor: "#111" }}>
        {/* Background Image */}
        <Image
          src="/assets/contact/contact.jpg"
          alt="Contact Us background"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
        />

        {/* Contrast Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.5) 45%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(to top, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.4) 45%, transparent 80%)",
          }}
        />

        {/* Navigation Overlay */}
        <nav
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              maxWidth: "1440px",
              margin: "0 auto",
              height: "70px",
              padding: "0 32px",
            }}
          >
            {/* Left links */}
            <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
              <Link href="/" style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", color: "#fff" }}>
                HOME
              </Link>
              <Link href="/about" style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", color: "#fff" }}>
                ABOUT US
              </Link>
              <Link href="/customize" style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", color: "#fff" }}>
                CUSTOMIZE
              </Link>
              <Link href="/concepts" style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", color: "#fff" }}>
                CONCEPTS
              </Link>
              <Link href="/shop" style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", color: "#fff" }}>
                SHOP
              </Link>
            </div>

            {/* Logo */}
            <div>
              <Link href="/">
                <Image src="/logo-black.png" alt="MNL Kingpin" width={150} height={40} style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} />
              </Link>
            </div>

            {/* Right links */}
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <Link href="/size-guide" style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", color: "#fff" }}>
                SIZE GUIDE
              </Link>
              <Link href="/contact" style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", color: "#fff", opacity: 0.6 }}>
                CONTACT
              </Link>

              {/* Order Now Button */}
              <a
                href="https://www.facebook.com/MNLKINGPINQUEZON"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border border-white text-white text-[10px] font-bold tracking-[0.14em] uppercase px-[18px] py-[8px] inline-block hover:bg-white hover:text-black transition-colors duration-200"
              >
                ORDER NOW
              </a>
            </div>
          </div>
        </nav>

      {/* Font imports and custom styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=League+Gothic&family=Inter:wght@400;500;600;700&display=swap');
        
        .contact-hero-title {
          font-family: 'League Gothic', 'Druk XCond Super', Impact, 'Arial Narrow', sans-serif;
          font-size: clamp(5.5rem, 13vw, 10rem);
          font-weight: 400;
          line-height: 0.75;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 20px;
          display: block;
          transform: scaleX(0.68);
          transform-origin: left center;
          width: fit-content;
        }

        .contact-hero-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1rem, 1.5vw, 1.25rem);
          font-weight: 400;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.85);
          max-width: 540px;
        }

        .quick-card {
          background-color: #ffffff;
          border: 1px solid #dedede;
          padding: 25px 28px;
          display: flex;
          align-items: center;
          gap: 20px;
          text-decoration: none;
          color: #111111;
          transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
        }

        .quick-card-icon {
          width: 44px;
          height: 44px;
          border: 1px solid #111;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #111;
          transition: border-color 0.25s ease, color 0.25s ease;
        }

        .quick-card-label {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #888;
          display: block;
          transition: color 0.25s ease;
        }

        .quick-card-value {
          font-size: 14px;
          font-weight: 800;
          color: #111;
          display: block;
          margin-top: 4px;
          transition: color 0.25s ease;
        }

        .quick-card-note {
          font-size: 11px;
          color: #666;
          display: block;
          margin-top: 2px;
          transition: color 0.25s ease;
        }

        .quick-card:hover,
        .quick-card:active,
        .quick-card:focus {
          background-color: #111111 !important;
          border-color: #111111 !important;
          color: #ffffff !important;
        }

        .quick-card:hover .quick-card-icon,
        .quick-card:active .quick-card-icon,
        .quick-card:focus .quick-card-icon {
          border-color: #ffffff !important;
          color: #ffffff !important;
        }

        .quick-card:hover .quick-card-label,
        .quick-card:active .quick-card-label,
        .quick-card:focus .quick-card-label {
          color: rgba(255, 255, 255, 0.6) !important;
        }

        .quick-card:hover .quick-card-value,
        .quick-card:active .quick-card-value,
        .quick-card:focus .quick-card-value {
          color: #ffffff !important;
        }

        .quick-card:hover .quick-card-note,
        .quick-card:active .quick-card-note,
        .quick-card:focus .quick-card-note {
          color: rgba(255, 255, 255, 0.6) !important;
        }
      `}</style>

      {/* Hero Title & Subtitle (Bottom-Left Aligned) */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: "1440px", width: "100%", margin: "0 auto", padding: "60px 48px 80px" }}>
        <h1 className="contact-hero-title">
          CONTACT US
        </h1>
        <p className="contact-hero-subtitle">
          Ready to create your team wear, request a quote, or ask about an order? Our MNL Kingpin team would love to hear from you.
        </p>
      </div>
      </div>

      {/* Quick Contact Cards */}
      <section style={{ maxWidth: "1200px", margin: "-40px auto 60px", padding: "0 24px", position: "relative", zIndex: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
          {/* Call Us */}
          <a href="tel:09215817900" className="quick-card">
            <div className="quick-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <span className="quick-card-label">Call Us</span>
              <span className="quick-card-value">0921 581 7900</span>
              <span className="quick-card-note">Talk directly with our team</span>
            </div>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/MNLKINGPINQUEZON"
            target="_blank"
            rel="noopener noreferrer"
            className="quick-card"
          >
            <div className="quick-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div>
              <span className="quick-card-label">Facebook</span>
              <span className="quick-card-value">MNL Kingpin Quezon</span>
              <span className="quick-card-note">Fastest response for quotes</span>
            </div>
          </a>

          {/* Email */}
          <a href="mailto:mnlkingpin@gmail.com" className="quick-card">
            <div className="quick-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <span className="quick-card-label">Email</span>
              <span className="quick-card-value">mnlkingpin@gmail.com</span>
              <span className="quick-card-note">Orders, partnerships, and support</span>
            </div>
          </a>
        </div>
      </section>

      {/* Main Content Grid */}
      <section style={{ maxWidth: "1200px", margin: "0 auto 80px", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px" }}>
          {/* Left: Contact Info */}
          <div>
            {/* Address */}
            <div style={{ paddingBottom: "24px", marginBottom: "24px", borderBottom: "1px solid #eee" }}>
              <div style={{ fontSize: "9px", fontWeight: "800", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Address
              </div>
              <div style={{ fontSize: "16px", fontWeight: "700", lineHeight: "1.4" }}>
                SILANGAN MAYAO, Old Manila S Rd,<br />Lucena City, 4301 Quezon
              </div>
              <p style={{ fontSize: "12px", color: "#777", marginTop: "6px", lineHeight: "1.6" }}>
                Visit our team for consultations, fabric selection, and custom-order discussions.
              </p>
            </div>

            {/* Phone Numbers */}
            <div style={{ paddingBottom: "24px", marginBottom: "24px", borderBottom: "1px solid #eee" }}>
              <div style={{ fontSize: "9px", fontWeight: "800", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Phone Number
              </div>
              <div style={{ fontSize: "16px", fontWeight: "700" }}>
                <a href="tel:09215817900" style={{ color: "#111" }}>0921 581 7900</a>
              </div>
            </div>

            {/* Business Hours */}
            <div style={{ paddingBottom: "24px", marginBottom: "24px", borderBottom: "1px solid #eee" }}>
              <div style={{ fontSize: "9px", fontWeight: "800", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", marginBottom: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Business Hours
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "6px", borderBottom: "1px solid #f0f0f0" }}>
                  <span>Monday – Friday</span>
                  <strong>9AM – 6PM</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "6px", borderBottom: "1px solid #f0f0f0" }}>
                  <span>Saturday</span>
                  <strong>9AM – 6PM</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Sunday</span>
                  <strong>By appointment</strong>
                </div>
              </div>
            </div>

            {/* Social Links (Minimal Logo-Only) */}
            <div style={{ paddingBottom: "30px" }}>
              <div style={{ fontSize: "9px", fontWeight: "800", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", marginBottom: "12px" }}>
                Follow MNL Kingpin
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <a
                  href="https://www.facebook.com/MNLKINGPINQUEZON"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{
                    width: "38px",
                    height: "38px",
                    border: "1px solid #111",
                    display: "grid",
                    placeItems: "center",
                    color: "#111",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#111";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#111";
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/mnlkingpin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    width: "38px",
                    height: "38px",
                    border: "1px solid #111",
                    display: "grid",
                    placeItems: "center",
                    color: "#111",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#111";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#111";
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Google Maps Block */}
            <div style={{ border: "1px solid #111", backgroundColor: "#fff", width: "100%", maxWidth: "340px", marginTop: "30px" }}>
              <iframe
                src="https://maps.google.com/maps?q=Mnl%20Kingpin%20Quezon,%20SILANGAN%20MAYAO,%20Old%20Manila%20S%20Rd,%20Lucena%20City,%204301%20Quezon&t=&z=16&ie=UTF8&iwloc=&output=embed"
                title="Mnl Kingpin Quezon Location Map"
                style={{ width: "100%", height: "220px", border: 0, filter: "grayscale(1) contrast(1.05)", display: "block" }}
                loading="lazy"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mnl+Kingpin+Quezon,+SILANGAN+MAYAO,+Old+Manila+S+Rd,+Lucena+City,+4301+Quezon"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 12px",
                  borderTop: "1px solid #111",
                  fontSize: "9px",
                  fontWeight: "800",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#111",
                  textDecoration: "none",
                  backgroundColor: "#fff",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                SILANGAN MAYAO, OLD MANILA S RD, LUCENA CITY, 4301 QUEZON
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <div style={{ marginBottom: "28px" }}>
              <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)", fontWeight: "500", letterSpacing: "-0.02em" }}>
                Send Us a Message
              </h2>
              <p style={{ color: "#777", fontSize: "13px", marginTop: "8px", lineHeight: "1.6" }}>
                Tell us about your team, design idea, quantity, and deadline. We typically respond within one business day.
              </p>
            </div>

            {formSubmitted ? (
              <div style={{ padding: "40px 32px", border: "1px solid #111", textAlign: "center", backgroundColor: "#fbfbfb" }}>
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>✓</div>
                <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px" }}>Message Sent</h3>
                <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.6" }}>
                  Thanks for contacting MNL Kingpin. Our team will get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ fontSize: "9px", fontWeight: "800", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", display: "block", marginBottom: "6px" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      style={{ width: "100%", padding: "12px 14px", border: "1px solid #ccc", fontSize: "14px", outline: "none" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "9px", fontWeight: "800", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", display: "block", marginBottom: "6px" }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      style={{ width: "100%", padding: "12px 14px", border: "1px solid #ccc", fontSize: "14px", outline: "none" }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "9px", fontWeight: "800", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", display: "block", marginBottom: "6px" }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    style={{ width: "100%", padding: "12px 14px", border: "1px solid #ccc", fontSize: "14px", outline: "none" }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ fontSize: "9px", fontWeight: "800", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", display: "block", marginBottom: "6px" }}>
                      Inquiry Type
                    </label>
                    <select style={{ width: "100%", padding: "12px 14px", border: "1px solid #ccc", fontSize: "14px", outline: "none", backgroundColor: "#fff" }}>
                      <option>Custom sportswear quote</option>
                      <option>Team or bulk order</option>
                      <option>Existing order support</option>
                      <option>Partnership or collaboration</option>
                      <option>Other inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: "9px", fontWeight: "800", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", display: "block", marginBottom: "6px" }}>
                      Estimated Quantity
                    </label>
                    <select style={{ width: "100%", padding: "12px 14px", border: "1px solid #ccc", fontSize: "14px", outline: "none", backgroundColor: "#fff" }}>
                      <option>12–20 pieces</option>
                      <option>21–50 pieces</option>
                      <option>51–100 pieces</option>
                      <option>100+ pieces</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "9px", fontWeight: "800", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", display: "block", marginBottom: "6px" }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your sport, colors, design, quantity, and target date..."
                    style={{ width: "100%", padding: "12px 14px", border: "1px solid #ccc", fontSize: "14px", outline: "none", resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: "#111",
                    color: "#fff",
                    padding: "14px 28px",
                    border: "none",
                    fontSize: "10px",
                    fontWeight: "800",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    alignSelf: "flex-start",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Black CTA Banner */}
      <section style={{ backgroundColor: "#111", color: "#fff", padding: "64px 40px", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
          <div>
            <h2 style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", fontSize: "clamp(2rem, 3.8vw, 3.2rem)", fontWeight: "400", lineHeight: "1.15", letterSpacing: "-0.02em", color: "#fff", margin: 0 }}>
              Ready to build your next uniform?
            </h2>
            <p style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: "rgba(255, 255, 255, 0.7)", fontSize: "13px", fontWeight: "400", marginTop: "10px", marginBottom: 0 }}>
              Browse our products or message us for a fully customized team package.
            </p>
          </div>
          <Link
            href="/shop"
            style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              fontSize: "10px",
              fontWeight: "800",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#fff",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              padding: "14px 28px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
            }}
          >
            BROWSE PRODUCTS &rarr;
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e5e5e5", paddingTop: "60px", paddingBottom: "40px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "48px", paddingBottom: "48px" }}>
            {/* Brand column */}
            <div>
              <div style={{ marginBottom: "16px" }}>
                <Image src="/logo-black.png" alt="MNL Kingpin" width={120} height={32} style={{ objectFit: "contain" }} />
              </div>
              <p style={{ fontSize: "12px", color: "#555", lineHeight: "1.7", maxWidth: "220px", marginBottom: "20px" }}>
                Premium custom sportswear from Quezon, Philippines. Founded in 2015. Trusted by teams from youth leagues to the pros.
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                <a
                  href="https://www.facebook.com/MNLKINGPINQUEZON"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "32px", height: "32px", border: "1px solid #ddd", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#000">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/mnlkingpin"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "32px", height: "32px", border: "1px solid #ddd", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#000">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links column */}
            <div>
              <p style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.15em", color: "#000", marginBottom: "18px", textTransform: "uppercase" }}>Links</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {["Home", "About Us", "Customize", "Concepts", "Shop", "Track Order", "Production Status", "Size Guide", "Newsletter"].map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      style={{ 
                        fontSize: "12px", 
                        color: "#666", 
                        fontWeight: "400",
                        textDecoration: "none", 
                        transition: "all 0.15s ease" 
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "#000";
                        e.currentTarget.style.fontWeight = "700";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "#666";
                        e.currentTarget.style.fontWeight = "400";
                      }}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products column */}
            <div>
              <p style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.15em", color: "#000", marginBottom: "18px", textTransform: "uppercase" }}>Products</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {["Basketball Jerseys", "Volleyball Uniforms", "Esports Jerseys", "Corporate Wear"].map((product) => (
                  <li key={product}>
                    <Link
                      href="#"
                      style={{ 
                        fontSize: "12px", 
                        color: "#666", 
                        fontWeight: "400",
                        textDecoration: "none", 
                        transition: "all 0.15s ease" 
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "#000";
                        e.currentTarget.style.fontWeight = "#700";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "#666";
                        e.currentTarget.style.fontWeight = "#400";
                      }}
                    >
                      {product}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <p style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.15em", color: "#000", marginBottom: "18px", textTransform: "uppercase" }}>Contact</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#555" style={{ marginTop: "2px", flexShrink: 0 }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span style={{ fontSize: "12px", color: "#555", lineHeight: "1.5" }}>SILANGAN MAYAO, Old Manila S Rd, Lucena City, 4301 Quezon</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#555">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <a href="tel:09215817900" style={{ fontSize: "12px", color: "#555", textDecoration: "none" }}>
                    0921 581 7900
                  </a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#555">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <a href="mailto:mnlkingpin@gmail.com" style={{ fontSize: "12px", color: "#555", textDecoration: "none" }}>
                    mnlkingpin@gmail.com
                  </a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#555">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <a href="https://www.facebook.com/MNLKINGPINQUEZON" target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "#555", textDecoration: "none" }}>
                    MNL Kingpin Quezon
                  </a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#555">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <a href="https://www.instagram.com/mnlkingpin" target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "#555", textDecoration: "none" }}>
                    MNL KINGPIN QUEZON
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{ borderTop: "1px solid #e5e5e5", paddingTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
            <p style={{ fontSize: "11px", color: "#aaa" }}>© 2026 MNL Kingpin Sportswear. All rights reserved.</p>
            <p style={{ fontSize: "11px", color: "#aaa" }}>Game Strong / Est. 2015 / Quezon, PH</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
