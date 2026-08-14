"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OurCommitment from "../components/OurCommitment";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans">
      <Header />

      {/* Font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=League+Gothic&family=Inter:wght@400;500;600;700&display=swap');
        
        .about-hero-title {
          font-family: 'League Gothic', 'Druk XCond Super', Impact, 'Arial Narrow', sans-serif;
          font-size: clamp(4.5rem, 9.5vw, 7.2rem);
          font-weight: 400;
          line-height: 0.8;
          letter-spacing: 0;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 12px;
          display: block;
          transform: scaleX(0.62);
          transform-origin: left center;
          width: fit-content;
        }

        .about-hero-subheading {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1.4rem, 2.6vw, 2.1rem);
          font-weight: 700;
          line-height: 1.18;
          letter-spacing: -0.015em;
          color: #ffffff;
          margin-bottom: 16px;
          max-width: 580px;
        }

        .about-hero-body {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          max-width: 480px;
        }

        .about-display {
          font-family: 'League Gothic', 'Druk XCond Super', Impact, 'Arial Narrow', sans-serif;
          font-size: clamp(3.2rem, 6vw, 4.8rem);
          font-weight: 400;
          line-height: 0.9;
          letter-spacing: 0;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 8px;
          display: block;
          transform: scaleX(0.68);
          transform-origin: left center;
          width: fit-content;
        }
      `}</style>

      {/* About Us Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-end px-8 md:px-16 pb-14 pt-36 bg-[#111] overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <Image
          src="/assets/about/Picture-Header-scaled.jpg"
          alt="MNL Kingpin Sportswear"
          fill
          priority
          className="object-cover object-center opacity-75"
        />
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 100%), linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-2xl mb-2">
          <h1 className="about-hero-title">
            ABOUT US
          </h1>

          <h2 className="about-hero-subheading">
            One of the Most Trusted Jersey Makers in the Philippines
          </h2>

          <p className="about-hero-body">
            Located in SILANGAN MAYAO, Old Manila S Rd, Lucena City, 4301 Quezon, MNL Kingpin Quezon branch was started in 2023 in Quezon and has been a favorite go-to sportswear brand of local celebrities and players alike.
          </p>
        </div>

        {/* Circular MNL Seal badge on bottom right */}
        <div className="absolute bottom-8 right-6 z-10 hidden md:block">
          <Image
            src="/logo2.png"
            alt="MNL Kingpin Seal"
            width={240}
            height={240}
            style={{ filter: "invert(1) brightness(10)" }}
          />
        </div>
      </section>

      {/* Moving Marquee Strip - positioned right below 100vh hero section */}
      <div className="marquee-strip-below">
        <div className="marquee-track-slow">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-text">ESTABLISHED 2015</span>
              <span className="marquee-dot">✦</span>
              <span className="marquee-text">TRUSTED JERSEY MAKERS</span>
              <span className="marquee-dot">✦</span>
              <span className="marquee-text">ADVANCED SUBLIMATION</span>
              <span className="marquee-dot">✦</span>
              <span className="marquee-text">12 PCS MINIMUM</span>
              <span className="marquee-dot">✦</span>
              <span className="marquee-text">FAST TURNAROUND</span>
              <span className="marquee-dot">✦</span>
              <span className="marquee-text">GAME STRONG</span>
              <span className="marquee-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Brand Legacy / About Side-by-Side Section (Matches picture layout) */}
      <section className="relative w-full bg-black min-h-screen grid grid-cols-1 md:grid-cols-12 overflow-hidden border-t border-white/10">
        {/* Left Side: Full height tall photo of jersey detail */}
        <div className="relative md:col-span-8 min-h-[500px] md:min-h-full w-full">
          <Image
            src="/assets/about/aboutimage.png"
            alt="MNL Kingpin Sportswear Detail"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Right Side: Black background column with copy text balanced vertically */}
        <div className="relative md:col-span-4 bg-black text-white p-8 md:p-12 lg:p-14 flex flex-col justify-center items-start space-y-6">

          {/* Paragraph 1 */}
          <p className="text-white text-[15px] md:text-[16px] leading-[1.65] font-normal tracking-normal">
            MNL Kingpin is one of the most trusted jersey makers in the Philippines, known for creating unique, bold, and high-quality sportswear designs that have stood out for many years. Established in 2015 and proudly based in Quezon City, we have built a strong reputation for delivering custom team uniforms that combine style, comfort, durability, and performance.
          </p>

          {/* Paragraph 2 */}
          <p className="text-white text-[15px] md:text-[16px] leading-[1.65] font-normal tracking-normal">
            Over the years, MNL Kingpin has become a favorite sportswear brand among local celebrities, athletes, players, teams, schools, organizations, and businesses. Our dedication to creative design and quality craftsmanship has allowed us to produce uniforms that not only look great but also give teams the confidence to perform at their best.
          </p>

          {/* Paragraph 3 */}
          <p className="text-white text-[15px] md:text-[16px] leading-[1.65] font-normal tracking-normal">
            At MNL Kingpin, we continuously create, innovate, and improve our products to meet the changing needs of our customers. From concept development and customization to production and delivery, our team is committed to providing premium-quality sportswear and excellent customer service.
          </p>

          {/* Paragraph 4 */}
          <p className="text-white text-[15px] md:text-[16px] leading-[1.65] font-normal tracking-normal pt-2">
            Let us help you bring your vision to life and enhance your next team uniform with a design that is truly unique, professional, and made to stand out.
          </p>

        </div>
      </section>

      {/* Our Commitment Section */}
      <OurCommitment />

      {/* Craftsmanship & Standards Grid */}
      <section className="py-20 px-8 md:px-16 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase mb-2">WHY CHOOSE US</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold tracking-tight text-white uppercase">
              THE MNL KINGPIN STANDARD
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#141414] p-8 border border-white/10 rounded-sm">
              <div className="text-white text-xl font-bold mb-3 tracking-wide">FULL SUBLIMATION</div>
              <p className="text-white/60 text-[13px] leading-[1.7] font-light">
                High-definition Italian ink sublimation that never fades, cracks, or peels. Bold colors engineered for maximum visual impact on court.
              </p>
            </div>

            <div className="bg-[#141414] p-8 border border-white/10 rounded-sm">
              <div className="text-white text-xl font-bold mb-3 tracking-wide">PREMIUM DRIFIT FABRICS</div>
              <p className="text-white/60 text-[13px] leading-[1.7] font-light">
                Breathable Drifit Quiana fabric engineered for optimal moisture-wicking, stretch performance, and lightweight cooling during high-intensity games.
              </p>
            </div>

            <div className="bg-[#141414] p-8 border border-white/10 rounded-sm">
              <div className="text-white text-xl font-bold mb-3 tracking-wide">100% CUSTOM TAILORING</div>
              <p className="text-white/60 text-[13px] leading-[1.7Query] font-light">
                Custom cut and sewn to precise pro team specifications, featuring knitted ribbings, custom necklines, and personalized player numbers & nameplates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details Card */}
      <section className="py-20 px-8 md:px-16 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto bg-[#111] p-10 md:p-14 border border-white/15 rounded-sm">
          <p className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase mb-2">VISIT US</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">MNL Kingpin Quezon Branch</h2>

          <div className="space-y-4 text-white/80 text-[14px] leading-relaxed font-light mb-8">
            <p>
              <strong className="text-white font-medium">Address:</strong> SILANGAN MAYAO, Old Manila S Rd, Lucena City, 4301 Quezon
            </p>
            <p>
              <strong className="text-white font-medium">Branch Established:</strong> 2023
            </p>
            <p>
              <strong className="text-white font-medium">Inquiries & Orders:</strong> Message us on Facebook or contact 0921 581 7900
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Mnl+Kingpin+Quezon,+SILANGAN+MAYAO,+Old+Manila+S+Rd,+Lucena+City,+4301+Quezon"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-block border border-white text-white text-[10px] font-bold tracking-[0.2em] uppercase px-6 py-3 hover:bg-white hover:text-black transition-all duration-200"
          >
            GET DIRECTIONS ON GOOGLE MAPS →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
