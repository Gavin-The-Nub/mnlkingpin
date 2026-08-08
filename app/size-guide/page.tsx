"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SizeGuide() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <Image
          src="/sizeguide.jpg"
          alt="Size guide fitting"
          fill
          priority
          className="object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />

        <div className="absolute bottom-24 left-10 z-10 max-w-lg">
          <p className="text-white/70 text-[11px] tracking-[0.25em] font-semibold mb-3">FIT MADE SIMPLE</p>
          <h1
            className="font-druk uppercase leading-none mb-6 whitespace-nowrap"
            style={{ fontSize: "clamp(50px, 8vw, 130px)", letterSpacing: "-0.01em" }}
          >
            Size Guide
          </h1>
          <p className="text-white/85 text-[14px] leading-[1.75] mb-7 font-light max-w-md">
            Find the right fit before placing your order. Choose the product you need, compare the chart
            with a garment you already own, and contact us whenever you are between sizes.
          </p>
          <a href="#" className="btn-primary inline-block bg-white text-black text-[11px] font-bold tracking-[0.2em] px-6 py-[13px] hover:bg-gray-200">
            VIEW ALL CHARTS
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
