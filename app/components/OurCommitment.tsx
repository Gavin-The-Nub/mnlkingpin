"use client";

import React from "react";
import Image from "next/image";

export default function OurCommitment() {
  return (
    <section className="w-full bg-white text-black py-12 md:py-16 border-t border-b border-gray-200">
      {/* Title flush on left side */}
      <div className="w-full mb-12 md:mb-16">
        <h2 className="commitment-title">OUR COMMITMENT</h2>
      </div>

      {/* Maximized container for 2x2 Grid */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-16 items-center">
          
          {/* Item 1: Exceptional design and craftsmanship */}
          <div className="flex items-center gap-6 md:gap-8">
            <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 relative">
              <Image
                src="/assets/about/commit1.png"
                alt="Exceptional design and craftsmanship"
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg md:text-xl font-bold text-black leading-snug max-w-md">
              Exceptional design and craftsmanship
            </span>
          </div>

          {/* Item 2: Reliable production and customer service */}
          <div className="flex items-center gap-6 md:gap-8">
            <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 relative">
              <Image
                src="/assets/about/commit2.png"
                alt="Reliable production and customer service"
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg md:text-xl font-bold text-black leading-snug max-w-md">
              Reliable production and customer service
            </span>
          </div>

          {/* Item 3: Premium materials and advanced sublimation technology */}
          <div className="flex items-center gap-6 md:gap-8">
            <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 relative">
              <Image
                src="/assets/about/commit3.png"
                alt="Premium materials and advanced sublimation technology"
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg md:text-xl font-bold text-black leading-snug max-w-md">
              Premium materials and advanced sublimation technology
            </span>
          </div>

          {/* Item 4: Global-quality standards */}
          <div className="flex items-center gap-6 md:gap-8">
            <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 relative">
              <Image
                src="/assets/about/commit4.png"
                alt="Global-quality standards"
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg md:text-xl font-bold text-black leading-snug max-w-md">
              Global-quality standards
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
