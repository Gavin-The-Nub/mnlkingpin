"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

const PRODUCTS = [
  { id: 1, name: "LEGAZY PERFORMANCE LONG SLEEVE", price: "P850", sizes: ["M", "L", "XL"], category: "JERSEYS" },
  { id: 2, name: "LEGAZY SLEEVELESS HOODIE", price: "P800", sizes: ["M", "L", "XL", "2XL"], category: "HOODIES" },
  { id: 3, name: "LEGAZY COURT MESH SHORTS", price: "P880", sizes: ["M", "L", "XL", "2XL"], category: "SHORTS" },
  { id: 4, name: "LEGAZY CLASSIC TEE – SAND", price: "P780", sizes: ["M", "L", "XL", "2XL"], category: "JERSEYS" },
  { id: 5, name: "LEGAZY CLASSIC TEE – BLACK", price: "P780", sizes: ["M", "L", "XL", "2XL"], category: "JERSEYS" },
  { id: 6, name: "MNL KINGPIN JERSEY", price: "P950", sizes: ["M", "L", "XL", "2XL"], category: "JERSEYS" },
  { id: 7, name: "LEGAZY MESH SHORTS – BLACK", price: "P880", sizes: ["M", "L", "XL", "2XL"], category: "SHORTS" },
];

const FILTERS = ["ALL", "JERSEYS", "HOODIES", "SHORTS", "JACKETS", "ACCESSORIES"];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [spotlight, setSpotlight] = useState<{ x: number; y: number } | null>(null);
  const jerseyRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});
  const [quickAddProduct, setQuickAddProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const [quickAddSize, setQuickAddSize] = useState("");

  const toggleSize = (productId: number, size: string) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: prev[productId] === size ? "" : size,
    }));
  };

  const openQuickAdd = (product: typeof PRODUCTS[0]) => {
    setQuickAddProduct(product);
    setQuickAddSize("");
  };

  const closeQuickAdd = () => {
    setQuickAddProduct(null);
    setQuickAddSize("");
  };

  const getMessengerUrl = (product: typeof PRODUCTS[0], size: string) => {
    const msg = size
      ? `Hi! I would like to order the ${product.name} in size ${size}.`
      : `Hi! I would like to inquire about the ${product.name}.`;
    return `https://m.me/MNLKINGPINQUEZON?text=${encodeURIComponent(msg)}`;
  };

  const filteredProducts = activeFilter === "ALL"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeFilter);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = jerseyRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setSpotlight(null);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-black text-white text-center text-[11px] tracking-[0.2em] py-[7px] border-b border-white/10 font-light">
          PREMIUM CUSTOM SPORTSWEAR. 12 PCS MINIMUM
        </div>
        <nav
          className="relative flex items-center justify-between px-8 py-[14px] transition-all duration-300"
          style={
            isScrolled
              ? { background: "rgba(10,10,10,0.80)", backdropFilter: "blur(6px)" }
              : { background: "transparent", backdropFilter: "none" }
          }
        >
          <ul className="flex items-center gap-7">
            {["HOME", "ABOUT US", "CUSTOMIZE", "CONCEPTS", "SHOP"].map((item) => (
              <li key={item}>
                <a href="#" className="nav-link text-white text-[11px] tracking-[0.18em] font-medium hover:text-gray-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <Image src="/logo-black.png" alt="MNL Kingpin" width={155} height={46} priority style={{ filter: "invert(1) brightness(10)" }} />
          </div>
          <ul className="flex items-center gap-6">
            {["SIZE GUIDE", "CONTACT"].map((item) => (
              <li key={item}>
                <a href="#" className="nav-link text-white text-[11px] tracking-[0.18em] font-medium hover:text-gray-300">
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a href="#" id="order-now-btn" className="btn-outline border border-white text-white text-[10px] tracking-[0.2em] font-semibold px-4 py-[7px] hover:bg-white hover:text-black">
                ORDER NOW
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline aria-hidden="true">
          <source src="/herocover.mp4" type="video/mp4" />
        </video>
        <div className="hero-gradient absolute inset-0" />
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }} />
        <div className="absolute bottom-10 left-10 z-10 max-w-xs">
          <div className="mb-4">
            <Image src="/logo2.png" alt="MNL Kingpin Est. 2015" width={210} height={210} style={{ filter: "invert(1) brightness(10)" }} />
          </div>
          <p className="text-white/85 text-[13px] leading-[1.75] mb-6 font-light">
            Built for the game. Designed to lead. Premium custom sportswear engineered for performance, comfort, and a look that sets your team apart.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#" id="view-products-btn" className="btn-primary bg-white text-black text-[10px] font-bold tracking-[0.2em] px-5 py-[11px] hover:bg-gray-200">VIEW PRODUCTS</a>
            <a href="#" id="request-quote-btn" className="btn-outline border border-white text-white text-[10px] font-bold tracking-[0.2em] px-5 py-[11px] hover:bg-white hover:text-black">REQUEST A QUOTE</a>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 z-10 flex flex-col items-end gap-2">
          <Image src="/gamestrong logo.png" alt="GameStrong" width={185} height={80} />
        </div>
      </section>

      {/* Marquee Strip */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-text">MNL KINGPIN</span>
              <span className="marquee-dot">✦</span>
              <span className="marquee-text">GMSTRNG</span>
              <span className="marquee-dot">✦</span>
              <span className="marquee-text">PREMIUM CUSTOM SPORTSWEAR</span>
              <span className="marquee-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* From Blank to GameStrong */}
      <section className="relative w-full bg-[#f0efeb] py-20 overflow-hidden">
        <div className="text-center mb-10">
          <p className="text-[10px] tracking-[0.35em] text-black/40 font-semibold uppercase mb-3">Fully Customizable</p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.02em] text-black uppercase leading-none">
            FROM BLANK TO GAMESTRONG
          </h2>
        </div>

        <div
          ref={jerseyRef}
          className="jersey-reveal-container relative mx-auto cursor-crosshair select-none"
          style={{ maxWidth: '860px', width: '92%' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Base: blank jersey */}
          <Image src="/blank jersey.png" alt="Blank jersey" width={860} height={710} className="w-full h-auto block" priority />

          {/* Design layer: revealed only under spotlight cursor */}
          <div
            className="absolute inset-0"
            style={{
              opacity: spotlight ? 1 : 0,
              WebkitMaskImage: spotlight
                ? `radial-gradient(circle 210px at ${spotlight.x}% ${spotlight.y}%, black 30%, transparent 100%)`
                : undefined,
              maskImage: spotlight
                ? `radial-gradient(circle 210px at ${spotlight.x}% ${spotlight.y}%, black 30%, transparent 100%)`
                : undefined,
            }}
          >
            <Image src="/jersey with design.png" alt="Jersey with custom design" width={860} height={710} className="w-full h-auto block" priority />
          </div>

          {/* Feature labels — z-10, above both image layers */}
          <div className="absolute z-10 flex items-center gap-2 pointer-events-none" style={{ left: '1%', top: '33%' }}>
            <span className="label-tag">Fully Sublimated</span>
            <div className="label-line" />
            <div className="label-dot" />
          </div>

          <div className="absolute z-10 flex items-center gap-2 pointer-events-none" style={{ right: '1%', top: '10%' }}>
            <div className="label-dot" />
            <div className="label-line" />
            <span className="label-tag">Knitted Ribbings &amp; Neckline</span>
          </div>

          <div className="absolute z-10 flex items-center gap-2 pointer-events-none" style={{ right: '1%', top: '46%' }}>
            <div className="label-dot" />
            <div className="label-line" />
            <span className="label-tag">Drifit Quiana Fabric</span>
          </div>

          <div className="absolute z-10 flex items-center gap-2 pointer-events-none" style={{ left: '1%', bottom: '20%' }}>
            <span className="label-tag">100% Customized</span>
            <div className="label-line" />
            <div className="label-dot" />
          </div>
        </div>

        <p className="text-center text-[10px] tracking-[0.28em] text-black/40 font-semibold uppercase mt-8">
          Hover to reveal · Click for full design
        </p>
      </section>

      {/* Trusted By */}
      <section className="relative w-full bg-[#f0efeb] pt-0 pb-24 overflow-hidden">
        <div className="w-full flex justify-center mb-16">
          <div className="w-[90%] max-w-5xl h-px bg-black/10" />
        </div>
        <div className="mx-auto px-8" style={{ maxWidth: '1100px' }}>
          <Image src="/trusted by.png" alt="Trusted by PBA 3X3, MPBL, NBTC, NCAA Philippines" width={1100} height={220} className="w-full h-auto" />
        </div>
      </section>

      {/* 10 Years of Custom Sportswear */}
      <section className="years-section relative w-full bg-[#111] overflow-hidden flex flex-col md:flex-row" style={{ height: '100vh' }}>
        {/* Left: text content */}
        <div className="years-content flex flex-col justify-center px-16 py-20 md:w-[42%] flex-shrink-0 z-10">
          <p className="years-eyebrow">EST. 2015</p>
          <h2 className="years-heading">
            10 Years of<br />Custom Sportswear
          </h2>
          <p className="years-body">
            For over 10 years, MNL Kingpin has created custom teamwear built for
            performance, identity, and pride—from grassroots teams to
            professional athletes. Born in Quezon City and trusted across the
            Philippines, we combine bold design, premium craftsmanship, and a
            passion for every game.
          </p>
          <p className="years-body mt-4">
            Founded in Quezon City, MNL Kingpin is a trusted partner of players,
            basketball leagues, schools, and brands across the Philippines.
          </p>
          <div className="mt-10">
            <a href="#" id="our-story-btn" className="years-cta">OUR STORY</a>
          </div>
        </div>

        {/* Right: players collage image */}
        <div className="years-image-wrap relative flex-1 min-h-[400px] md:min-h-0">
          <Image
            src="/big screen players.png"
            alt="MNL Kingpin athletes — PBA, MPBL and grassroots players wearing custom sportswear"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 58vw"
            priority
          />
          {/* subtle dark vignette on the left edge to blend with text panel */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#111] to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        {/* Header row */}
        <div className="products-header">
          <span className="products-title">Products</span>
          <nav className="products-filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`filter-btn${activeFilter === f ? " active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </nav>
        </div>

        {/* Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              {/* Flip card */}
              <div className="flip-card-wrapper">
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front">
                    <img
                      src={`/product/${product.id}F.jpg`}
                      alt={product.name}
                    />
                  </div>
                  {/* Back */}
                  <div className="flip-card-back">
                    <img
                      src={`/product/${product.id}B.jpg`}
                      alt={`${product.name} – back`}
                    />
                  </div>
                </div>
                {/* Order via Messenger overlay */}
                <button
                  onClick={() => openQuickAdd(product)}
                  className="flip-card-add"
                >
                  ORDER NOW
                </button>
              </div>

              {/* Product info */}
              <div className="product-info">
                <p className="product-name">{product.name}</p>
                <div className="product-sizes">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-pill${selectedSizes[product.id] === size ? " selected" : ""}`}
                      onClick={() => toggleSize(product.id, size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Let's Create Together Section */}
      <section className="relative w-full flex flex-col md:flex-row overflow-hidden" style={{ height: '100vh' }}>
        {/* Left: product image — ~60% width */}
        <div className="relative md:w-[60%] flex-shrink-0 min-h-[50vh] md:min-h-0">
          <Image
            src="/productts.png"
            alt="MNL Kingpin full product lineup — jerseys, hoodies, shorts, jackets and accessories"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>

        {/* Right: dark panel with text */}
        <div className="relative flex-1 bg-black flex flex-col justify-center px-12 py-16 md:px-16">
          {/* Heading */}
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light tracking-[-0.01em] text-white leading-tight mb-8">
            Let&apos;s Create Together
          </h2>

          {/* Eyebrow + description */}
          <p className="text-[9px] tracking-[0.28em] text-white/50 font-semibold uppercase mb-3">
            PRODUCTS &amp; SERVICES
          </p>
          <p className="text-white/65 text-[13px] leading-[1.8] font-light mb-4" style={{ maxWidth: '320px' }}>
            Full sublimation sports apparel for teams, brands, schools, and leagues. We make polos, t-shirts, varsity jackets, volleyball uniforms, and custom sportswear for any sport.
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 my-5" style={{ maxWidth: '320px' }} />

          {/* Min order note */}
          <p className="text-[9px] tracking-[0.24em] text-white/45 font-semibold uppercase mb-7">
            12 PCS MINIMUM · RUSH ORDERS AVAILABLE
          </p>

          {/* CTA button — pill shape */}
          <div>
            <a
              href="https://www.facebook.com/MNLKINGPINQUEZON"
              target="_blank"
              rel="noopener noreferrer"
              id="create-together-btn"
              className="inline-block bg-white text-black text-[9px] font-bold tracking-[0.22em] px-7 py-[12px] rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
              START YOUR CUSTOM ORDER
            </a>
          </div>


        </div>
      </section>

      {/* Quick Add Modal */}
      {quickAddProduct && (
        <div className="qa-backdrop" onClick={closeQuickAdd}>
          <div className="qa-modal" onClick={(e) => e.stopPropagation()}>
            <button className="qa-close" onClick={closeQuickAdd} aria-label="Close">✕</button>
            <div className="qa-image-wrap">
              <img
                src={`/product/${quickAddProduct.id}F.jpg`}
                alt={quickAddProduct.name}
              />
            </div>
            <div className="qa-body">
              <p className="qa-eyebrow">QUICK ADD</p>
              <h2 className="qa-name">{quickAddProduct.name}</h2>
              <p className="qa-price">{quickAddProduct.price}</p>
              <div className="qa-divider" />
              <p className="qa-size-label">CHOOSE A SIZE</p>
              <div className="qa-sizes">
                {quickAddProduct.sizes.map((size) => (
                  <button
                    key={size}
                    className={`qa-size-btn${quickAddSize === size ? " selected" : ""}`}
                    onClick={() => setQuickAddSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!quickAddSize && (
                <p className="qa-hint">Select a size to add another item.</p>
              )}
              <a
                href={getMessengerUrl(quickAddProduct, quickAddSize)}
                target="_blank"
                rel="noopener noreferrer"
                className={`qa-order-btn${!quickAddSize ? " disabled" : ""}`}
                onClick={(e) => { if (!quickAddSize) e.preventDefault(); }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.652V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.191 14.963-3.055-3.26-5.963 3.26L10.732 8.1l3.131 3.26L19.752 8.1l-6.561 6.863z"/>
                </svg>
                ORDER NOW
              </a>
            </div>
          </div>
        </div>
      )}
      {/* Let's Create Together CTA Section */}
      <section style={{ backgroundColor: '#fff', padding: '100px 32px 80px', textAlign: 'center', borderTop: '1px solid #e5e5e5' }}>

        {/* Eyebrow */}
        <p style={{ fontSize: '10px', letterSpacing: '0.22em', color: '#aaa', fontWeight: '600', textTransform: 'uppercase', marginBottom: '20px' }}>
          READY TO ORDER?
        </p>

        {/* Headline */}
        <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: '400', lineHeight: '1.1', color: '#111', marginBottom: '24px', letterSpacing: '-0.02em' }}>
          Let&apos;s Create<br />Together
        </h2>

        {/* Subtext */}
        <p style={{ fontSize: '14px', color: '#888', marginBottom: '48px', maxWidth: '480px', margin: '0 auto 48px' }}>
          Message us with your vision and we&apos;ll take it from there: design, production, delivery.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <a
            href="https://www.facebook.com/MNLKINGPINQUEZON"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.18em', color: '#fff', backgroundColor: '#111', textTransform: 'uppercase', textDecoration: 'none', padding: '14px 24px', display: 'inline-block' }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
          >
            MESSAGE ON FACEBOOK
          </a>
          <a
            href="#newsletter"
            style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.18em', color: '#111', textTransform: 'uppercase', textDecoration: 'none', padding: '14px 24px', border: '1px solid #ccc' }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            NEWSLETTER
          </a>
          <a
            href="https://www.instagram.com/mnlkingpin"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.18em', color: '#111', textTransform: 'uppercase', textDecoration: 'none', padding: '14px 24px', border: '1px solid #ccc' }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            INSTAGRAM
          </a>
        </div>
      </section>

      {/* Footer */}

      <footer style={{ borderTop: '1px solid #e5e5e5', paddingTop: '60px', paddingBottom: '40px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          {/* Top row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 0.8fr 0.8fr 1fr', gap: '48px', paddingBottom: '48px' }}>

            {/* Brand column */}
            <div>
              <div style={{ marginBottom: '16px' }}>
                <Image src="/logo-black.png" alt="MNL Kingpin" width={160} height={40} style={{ objectFit: 'contain' }} />
              </div>
              <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.7', maxWidth: '220px', marginBottom: '20px' }}>
                Premium custom sportswear from Quezon, Philippines. Founded in 2015. Trusted by teams from youth leagues to the pros.
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href="https://www.facebook.com/MNLKINGPINQUEZON" target="_blank" rel="noopener noreferrer"
                  style={{ width: '32px', height: '32px', border: '1px solid #ddd', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#000" aria-label="Facebook">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/mnlkingpin" target="_blank" rel="noopener noreferrer"
                  style={{ width: '32px', height: '32px', border: '1px solid #ddd', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#000" aria-label="Instagram">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Links column */}
            <div>
              <p style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.15em', color: '#000', marginBottom: '18px', textTransform: 'uppercase' }}>Links</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Home', 'About Us', 'Customize', 'Concepts', 'Shop', 'Track Order', 'Production Status', 'Size Guide', 'Newsletter'].map((link) => (
                  <li key={link}>
                    <a href="#" style={{ fontSize: '12px', color: '#555', textDecoration: 'none' }}
                      onMouseOver={(e) => (e.currentTarget.style.color = '#000')}
                      onMouseOut={(e) => (e.currentTarget.style.color = '#555')}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products column */}
            <div>
              <p style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.15em', color: '#000', marginBottom: '18px', textTransform: 'uppercase' }}>Products</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Basketball Jerseys', 'Volleyball Uniforms', 'Esports Jerseys', 'Corporate Wear'].map((product) => (
                  <li key={product}>
                    <a href="#" style={{ fontSize: '12px', color: '#555', textDecoration: 'none' }}
                      onMouseOver={(e) => (e.currentTarget.style.color = '#000')}
                      onMouseOut={(e) => (e.currentTarget.style.color = '#555')}>
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <p style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.15em', color: '#000', marginBottom: '18px', textTransform: 'uppercase' }}>Contact</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Location */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#555" style={{ marginTop: '2px', flexShrink: 0 }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span style={{ fontSize: '12px', color: '#555', lineHeight: '1.5' }}>SILANGAN MAYAO, Old Manila S Rd, Lucena City, 4301 Quezon</span>
                </div>
                {/* Phone */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#555">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <a href="tel:09215817900" style={{ fontSize: '12px', color: '#555', textDecoration: 'none' }}>0921 581 7900</a>
                </div>
                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#555">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <a href="mailto:mnlkingpin@gmail.com" style={{ fontSize: '12px', color: '#555', textDecoration: 'none' }}>mnlkingpin@gmail.com</a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
            <p style={{ fontSize: '11px', color: '#aaa' }}>© 2026 MNL Kingpin Sportswear. All rights reserved.</p>
            <p style={{ fontSize: '11px', color: '#aaa' }}>
              Game Strong / Est. 2015 / Quezon City, PH &nbsp;·&nbsp; Developed by{' '}
              <a href="#" style={{ color: '#aaa', textDecoration: 'underline' }}>Errol Aaron Merjudio</a>
            </p>
          </div>
        </div>
      </footer>

    </div>

  );
}
