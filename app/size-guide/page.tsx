"use client";

import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const STEPS = [
  {
    number: "01",
    title: "USE A GARMENT",
    description: "Lay a similar, well-fitting garment flat on a smooth surface.",
  },
  {
    number: "02",
    title: "MEASURE FLAT",
    description: "Measure the points shown in the matching chart without stretching the fabric.",
  },
  {
    number: "03",
    title: "COMPARE & CHOOSE",
    description: "Match your measurements to the closest size. Choose up if you prefer a looser fit.",
  },
];

const CATEGORY_FILTERS = [
  { key: "all", label: "ALL CHARTS" },
  { key: "jerseys", label: "JERSEYS" },
  { key: "kids", label: "KIDS" },
  { key: "shirts", label: "SHIRTS" },
  { key: "long-sleeves", label: "LONG SLEEVES" },
  { key: "shorts", label: "SHORTS" },
  { key: "warmers", label: "WARMERS" },
];

const CHARTS = [
  {
    id: "basketball",
    category: "jerseys",
    categoryLabel: "JERSEYS",
    title: "BASKETBALL",
    description: "Playing jersey measurements for adult basketball uniforms.",
    image: "/assets/sizechart/Basketball Size Chart.png",
  },
  {
    id: "kids",
    category: "kids",
    categoryLabel: "KIDS",
    title: "KIDS",
    description: "Youth sizing for growing athletes and junior teams.",
    image: "/assets/sizechart/Kids Size Chart.png",
  },
  {
    id: "t-shirt",
    category: "shirts",
    categoryLabel: "SHIRTS",
    title: "T-SHIRT",
    description: "Classic everyday shirt measurements and fit.",
    image: "/assets/sizechart/T Shirt Size Chart.png",
  },
  {
    id: "boxy-shirt",
    category: "shirts",
    categoryLabel: "SHIRTS",
    title: "BOXY SHIRT",
    description: "Relaxed, wider-cut shirt measurements.",
    image: "/assets/sizechart/BOXY SHIRT SIZE CHART.png",
  },
  {
    id: "long-sleeves",
    category: "long-sleeves",
    categoryLabel: "LONG SLEEVES",
    title: "LONG SLEEVES",
    description: "Standard long-sleeve apparel measurements.",
    image: "/assets/sizechart/Longsleeves Size Chart.png",
  },
  {
    id: "mesh-short",
    category: "shorts",
    categoryLabel: "SHORTS",
    title: "MESH SHORT",
    description: "Mesh Short",
    image: "/assets/sizechart/Mesh Shorts Size Chart copy.png",
  },
  {
    id: "assorted-jersey",
    category: "jerseys",
    categoryLabel: "JERSEYS",
    title: "ASSORTED JERSEY",
    description: "Alternate assorted jersey measurements.",
    image: "/assets/sizechart/Assorted Mesh Short  Size Chart copy.png",
  },
  {
    id: "warmer",
    category: "warmers",
    categoryLabel: "WARMERS",
    title: "WARMER",
    description: "Team warmer and outerwear measurements.",
    image: "/assets/sizechart/WARMER.png",
  },
];

function ExpandIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      className={className}
    >
      <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
    </svg>
  );
}

const SIZES = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
// Upper bound (inclusive) for each size, in cm / kg. Anything above the last bound maps to 3XL.
const HEIGHT_BREAKPOINTS_CM = [155, 163, 170, 177, 184, 191];
const WEIGHT_BREAKPOINTS_KG = [50, 58, 68, 78, 90, 105];

function sizeIndexFromValue(value: number, breakpoints: number[]) {
  for (let i = 0; i < breakpoints.length; i++) {
    if (value <= breakpoints[i]) return i;
  }
  return breakpoints.length;
}

function parseHeightToCm(raw: string, unit: "cm" | "ftin") {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  if (unit === "cm") {
    const cm = parseFloat(trimmed);
    return Number.isFinite(cm) ? cm : null;
  }
  // ft/in — accepts formats like 5'10, 5'10", or a plain decimal feet value like 5.8
  const match = trimmed.match(/^(\d+)\s*'?\s*(\d+)?/);
  if (!match) return null;
  const feet = parseInt(match[1], 10);
  const inches = match[2] ? parseInt(match[2], 10) : 0;
  if (!Number.isFinite(feet)) return null;
  return feet * 30.48 + inches * 2.54;
}

function parseWeightToKg(raw: string, unit: "kg" | "lbs") {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const value = parseFloat(trimmed);
  if (!Number.isFinite(value)) return null;
  return unit === "kg" ? value : value * 0.453592;
}

export default function SizeGuide() {
  const [isOpen, setIsOpen] = useState(true);
  const [heightUnit, setHeightUnit] = useState<"ftin" | "cm">("cm");
  const [weightUnit, setWeightUnit] = useState<"lbs" | "kg">("kg");
  const [heightValue, setHeightValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [suggestedSize, setSuggestedSize] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedChart, setSelectedChart] = useState<typeof CHARTS[number] | null>(null);

  const filteredCharts =
    activeFilter === "all" ? CHARTS : CHARTS.filter((chart) => chart.category === activeFilter);

  const handleSuggestSize = () => {
    const heightCm = parseHeightToCm(heightValue, heightUnit);
    const weightKg = parseWeightToKg(weightValue, weightUnit);

    if (heightCm === null || weightKg === null) {
      setError("Please enter both your height and weight.");
      setSuggestedSize(null);
      return;
    }

    setError("");
    const heightIndex = sizeIndexFromValue(heightCm, HEIGHT_BREAKPOINTS_CM);
    const weightIndex = sizeIndexFromValue(weightKg, WEIGHT_BREAKPOINTS_KG);
    const sizeIndex = Math.max(heightIndex, weightIndex);
    setSuggestedSize(SIZES[sizeIndex]);
  };

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

      {/* Measure in Three Easy Steps */}
      <section className="relative w-full bg-white text-black">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/10 border-b border-black/10">
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <p className="text-[10px] tracking-[0.3em] text-black/40 font-semibold uppercase mb-4">
              Before You Choose
            </p>
            <h2
              className="font-light leading-[1.05]"
              style={{ fontSize: "clamp(2.25rem, 3.6vw, 3.25rem)", letterSpacing: "-0.01em" }}
            >
              Measure in three easy steps
            </h2>
          </div>

          {STEPS.map((step) => (
            <div key={step.number} className="p-10 md:p-14 group">
              <span className="inline-flex items-center justify-center w-9 h-9 bg-black text-white text-[12px] font-bold mb-8 transition-[border-radius] duration-500 ease-in-out rounded-none group-hover:rounded-full">
                {step.number}
              </span>
              <h3 className="text-[13px] font-bold tracking-[0.05em] uppercase mb-3">
                {step.title}
              </h3>
              <p className="text-black/50 text-[13px] leading-[1.7] font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Recommendation — Find My Size */}
      <section className="relative w-full bg-white text-black py-24 px-8 md:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-black/40 font-semibold uppercase mb-4">
                Quick Recommendation
              </p>
              <h2
                className="font-light leading-[1.05]"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.01em" }}
              >
                Find my size
              </h2>
            </div>
            <p className="text-black/55 text-[14px] leading-[1.75] font-light max-w-md">
              Enter your height and weight for a general MNL Kingpin apparel size
              suggestion, then confirm it against the product chart below.
            </p>
          </div>

          <div className="max-w-7xl mx-auto border border-black/80">
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="w-full flex items-center justify-between px-7 py-5 bg-white border-b border-black/80"
            >
              <span className="text-[13px] font-bold tracking-[0.05em] uppercase">Find My Size</span>
              <span className="text-[12px]">{isOpen ? "▲" : "▼"}</span>
            </button>

            {isOpen && (
              <div className="px-7 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-[11px] tracking-[0.2em] text-black/40 font-semibold uppercase mb-3">
                      Height
                    </p>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={heightValue}
                      onChange={(e) => setHeightValue(e.target.value)}
                      placeholder={heightUnit.toUpperCase()}
                      className="w-full border border-black/30 px-4 py-3 text-[14px] mb-3 focus:outline-none focus:border-black"
                    />
                    <div className="flex border border-black/80">
                      <button
                        type="button"
                        onClick={() => setHeightUnit("ftin")}
                        className={`flex-1 py-3 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors ${
                          heightUnit === "ftin" ? "bg-black text-white" : "bg-white text-black"
                        }`}
                      >
                        FT/IN
                      </button>
                      <button
                        type="button"
                        onClick={() => setHeightUnit("cm")}
                        className={`flex-1 py-3 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors border-l border-black/80 ${
                          heightUnit === "cm" ? "bg-black text-white" : "bg-white text-black"
                        }`}
                      >
                        CM
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] tracking-[0.2em] text-black/40 font-semibold uppercase mb-3">
                      Weight
                    </p>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={weightValue}
                      onChange={(e) => setWeightValue(e.target.value)}
                      placeholder={weightUnit.toUpperCase()}
                      className="w-full border border-black/30 px-4 py-3 text-[14px] mb-3 focus:outline-none focus:border-black"
                    />
                    <div className="flex border border-black/80">
                      <button
                        type="button"
                        onClick={() => setWeightUnit("lbs")}
                        className={`flex-1 py-3 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors ${
                          weightUnit === "lbs" ? "bg-black text-white" : "bg-white text-black"
                        }`}
                      >
                        LBS
                      </button>
                      <button
                        type="button"
                        onClick={() => setWeightUnit("kg")}
                        className={`flex-1 py-3 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors border-l border-black/80 ${
                          weightUnit === "kg" ? "bg-black text-white" : "bg-white text-black"
                        }`}
                      >
                        KG
                      </button>
                    </div>
                  </div>
                </div>

                {error && (
                  <p className="text-red-600 text-[12px] mt-6">{error}</p>
                )}

                {suggestedSize && !error && (
                  <div className="mt-6 px-5 py-4 bg-[#f7f6f2] border border-black/15 flex items-center justify-between">
                    <span className="text-[12px] tracking-[0.1em] uppercase text-black/50">
                      Suggested Size
                    </span>
                    <span className="text-[20px] font-bold">{suggestedSize}</span>
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleSuggestSize}
                  className="w-full mt-8 py-4 bg-black text-white text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-black/85 transition-colors"
                >
                  Suggest My Size
                </button>
              </div>
            )}
          </div>

          <p className="text-center text-black/40 text-[11px] mt-6">
            This is a general recommendation. Product cuts can differ, so always compare with the
            specific chart before ordering.
          </p>
        </div>
      </section>

      {/* Choose Your Product — Fit Library */}
      <section className="relative w-full bg-white text-black py-24 px-8 md:px-16 border-t border-black/10">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-black/40 font-semibold uppercase mb-4">
                MNL Kingpin Fit Library
              </p>
              <h2
                className="font-light leading-[1.05]"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.01em" }}
              >
                Choose your product
              </h2>
            </div>
            <p className="text-black/55 text-[13px] leading-[1.75] font-light max-w-md">
              Tap any chart to open a larger, easy-to-read view. All measurements and
              fit notes shown in the original charts are preserved.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {CATEGORY_FILTERS.map((filter) => (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-[10px] text-[10px] font-bold tracking-[0.2em] uppercase border transition-colors ${
                  activeFilter === filter.key
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black/15 hover:border-black/40"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredCharts.map((chart) => (
              <div
                key={chart.id}
                className="group border border-black/10 bg-white flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-black/30 hover:shadow-xl"
              >
                <div className="relative aspect-square bg-white overflow-hidden">
                  <Image
                    src={chart.image}
                    alt={`${chart.title} size chart`}
                    fill
                    className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <button
                    type="button"
                    onClick={() => setSelectedChart(chart)}
                    aria-label={`Expand ${chart.title} size chart`}
                    className="absolute bottom-4 right-4 w-9 h-9 flex items-center justify-center bg-black/85 text-white hover:bg-black transition-colors"
                  >
                    <ExpandIcon className="transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]" />
                  </button>
                </div>
                <div className="px-6 pt-5 pb-7">
                  <p className="text-[9px] tracking-[0.22em] text-black/40 font-semibold uppercase mb-2">
                    {chart.categoryLabel}
                  </p>
                  <h3 className="text-[11px] font-bold tracking-[0.12em] uppercase mb-2">
                    {chart.title}
                  </h3>
                  <p className="text-black/50 text-[12px] leading-[1.6] font-light">
                    {chart.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 border border-black/15 px-8 py-8 md:px-10 md:py-9 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-[16px] font-bold mb-2">Not sure which size to order?</h3>
              <p className="text-black/50 text-[12px] leading-[1.7] font-light max-w-lg">
                Send us your measurements and preferred fit. Our team will help you choose
                before production starts.
              </p>
            </div>
            <a
              href="https://m.me/MNLKINGPINQUEZON?text=Hi! I need help choosing the right size."
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 border border-black text-black text-[10px] font-bold tracking-[0.2em] uppercase px-6 py-[13px] hover:bg-black hover:text-white transition-colors text-center"
            >
              Ask Our Team
            </a>
          </div>
        </div>
      </section>

      {selectedChart && (
        <div className="qa-backdrop" onClick={() => setSelectedChart(null)}>
          <div className="chart-lightbox" onClick={(e) => e.stopPropagation()}>
            <button
              className="qa-close"
              onClick={() => setSelectedChart(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <Image
              src={selectedChart.image}
              alt={`${selectedChart.title} size chart`}
              width={1400}
              height={1400}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
