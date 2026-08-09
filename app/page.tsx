"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useCallback } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <Header />

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
                ORDER VIA MESSENGER
              </a>
            </div>
            <a
              href="https://www.facebook.com/MNLKINGPINQUEZON"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white text-black text-center text-xs font-bold tracking-[0.2em] py-4 hover:bg-gray-200 transition"
            >
              ORDER VIA FACEBOOK
            </a>
          </div>
        </div>
      )}

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
            className="btn-outline border border-white/80 text-white text-[10px] font-extrabold tracking-[0.15em] uppercase px-7 py-[14px] inline-flex items-center gap-2 whitespace-nowrap hover:bg-white hover:text-black transition-all duration-200"
          >
            BROWSE PRODUCTS &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
