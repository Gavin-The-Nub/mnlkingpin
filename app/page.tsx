"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ─── Fixed Header Stack ─── */}
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Announcement Bar */}
        <div className="bg-black text-white text-center text-[11px] tracking-[0.2em] py-[7px] border-b border-white/10 font-light">
          PREMIUM CUSTOM SPORTSWEAR. 12 PCS MINIMUM
        </div>

        {/* Main Navigation */}
        <nav
          className="relative flex items-center justify-between px-8 py-[14px]"
          style={{ background: "rgba(10,10,10,0.80)", backdropFilter: "blur(6px)" }}
        >
          {/* Left nav links */}
          <ul className="flex items-center gap-7">
            {["HOME", "ABOUT US", "CUSTOMIZE", "CONCEPTS", "SHOP"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="nav-link text-white text-[11px] tracking-[0.18em] font-medium hover:text-gray-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <Image
              src="/logo-black.png"
              alt="MNL Kingpin"
              width={155}
              height={46}
              priority
              style={{ filter: "invert(1) brightness(10)" }}
            />
          </div>

          {/* Right nav links */}
          <ul className="flex items-center gap-6">
            {["SIZE GUIDE", "CONTACT"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="nav-link text-white text-[11px] tracking-[0.18em] font-medium hover:text-gray-300"
                >
                  {item}
                </a>
              </li>
            ))}

            {/* Cart */}
            <li>
              <a href="#" className="cart-icon text-white hover:text-gray-300 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 6h12.8M7 13H5.4M9 21a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
                  />
                </svg>
                <span className="cart-badge">1</span>
              </a>
            </li>

            {/* Track Order */}
            <li>
              <a
                href="#"
                id="track-order-btn"
                className="btn-outline border border-white text-white text-[10px] tracking-[0.2em] font-semibold px-4 py-[7px] hover:bg-white hover:text-black"
              >
                TRACK ORDER
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* ─── Hero Section ─── */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/herocover.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="hero-gradient absolute inset-0" />
        {/* Bottom fade to black */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }}
        />

        {/* ── Bottom-Left Content ── */}
        <div className="absolute bottom-10 left-10 z-10 max-w-xs">
          {/* MNL Kingpin Badge Logo */}
          <div className="mb-4">
            <Image
              src="/logo2.png"
              alt="MNL Kingpin Est. 2015"
              width={210}
              height={210}
              style={{ filter: "invert(1) brightness(10)" }}
            />
          </div>

          {/* Tagline */}
          <p className="text-white/85 text-[13px] leading-[1.75] mb-6 font-light">
            Built for the game. Designed to lead. Premium custom
            sportswear engineered for performance, comfort, and a look
            that sets your team apart.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              id="view-products-btn"
              className="btn-primary bg-white text-black text-[10px] font-bold tracking-[0.2em] px-5 py-[11px] hover:bg-gray-200"
            >
              VIEW PRODUCTS
            </a>
            <a
              href="#"
              id="request-quote-btn"
              className="btn-outline border border-white text-white text-[10px] font-bold tracking-[0.2em] px-5 py-[11px] hover:bg-white hover:text-black"
            >
              REQUEST A QUOTE
            </a>
          </div>
        </div>

        {/* ── Bottom-Right Content ── */}
        <div className="absolute bottom-8 right-8 z-10 flex flex-col items-end gap-2">
          {/* GameStrong Logo */}
          <Image
            src="/gamestrong logo.png"
            alt="GameStrong"
            width={185}
            height={80}
            style={{ filter: "invert(1) brightness(10)" }}
          />

          {/* Facebook ORDER NOW */}
          <a
            href="#"
            id="order-now-btn"
            className="flex items-center gap-2 text-white text-[11px] tracking-[0.15em] font-medium hover:text-gray-300 transition-colors"
          >
            {/* Facebook F icon */}
            <span
              className="flex items-center justify-center w-5 h-5 rounded-full text-[11px] font-bold leading-none"
              style={{ background: "#1877F2" }}
              aria-label="Facebook"
            >
              f
            </span>
            ORDER NOW
          </a>
        </div>
      </section>
    </div>
  );
}
