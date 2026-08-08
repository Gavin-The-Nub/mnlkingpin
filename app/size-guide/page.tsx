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
              <span className="inline-flex items-center justify-center w-9 h-9 bg-black text-white text-[12px] font-bold mb-8 transition-all duration-300 rounded-none group-hover:rounded-full">
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
              className="w-full flex items-center justify-between px-7 py-5 bg-[#f7f6f2] border-b border-black/80"
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

      <Footer />
    </div>
  );
}
