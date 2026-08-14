"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LEFT = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "CUSTOMIZE", href: "#" },
  { label: "CONCEPTS", href: "#" },
  { label: "SHOP", href: "#" },
];

const NAV_RIGHT = [
  { label: "SIZE GUIDE", href: "/size-guide" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
          {NAV_LEFT.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="nav-link text-white text-[11px] tracking-[0.18em] font-medium hover:text-gray-300">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <a href="/">
            <Image src="/logo-black.png" alt="MNL Kingpin" width={155} height={46} priority style={{ filter: "invert(1) brightness(10)" }} />
          </a>
        </div>
        <ul className="flex items-center gap-6">
          {NAV_RIGHT.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="nav-link text-white text-[11px] tracking-[0.18em] font-medium hover:text-gray-300">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="https://www.facebook.com/MNLKINGPINQUEZON" target="_blank" rel="noopener noreferrer" id="order-now-btn" className="btn-outline border border-white text-white text-[10px] tracking-[0.2em] font-semibold px-4 py-[7px] hover:bg-white hover:text-black transition-all duration-200">
              ORDER NOW
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
