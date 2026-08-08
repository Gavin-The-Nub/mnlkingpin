# Specification: Homepage Marquee and Jersey Feature Pointers

## Goal
Improve the homepage visual design and alignment by:
1. Replacing the text-based marquee strip with the custom scrolling image banner `marquee.png`.
2. Repositioning the four feature labels ("FULLY SUBLIMATED", "KNITTED RIBBINGS AND NECKLINE", "DRIFIT QUIANA FABRIC", "100% CUSTOMIZED") and their connecting lines/dots to point precisely to the correct parts of the jersey, matching the reference design.

---

## Proposed Changes

### 1. Marquee Update (`app/page.tsx`, `app/globals.css`)
- Replace the text-based loop inside `.marquee-track` with two copies of `public/marquee.png` to create a seamless infinite scrolling loop.
- Set container height of `.marquee-strip` and `.marquee-track` to `50px` to scale the image and keep it sharp on all displays.

### 2. Feature Labels Positioning (`app/page.tsx`, `app/globals.css`)
- Use a fully responsive flex-grow layout for the label lines so that as the container resizes, the dots stay locked to the exact parts of the jersey.
- Coordinates mapping:
  - **KNITTED RIBBINGS AND NECKLINE**:
    - Neck collar target: `left: 44.5%`, `top: 17%`
    - Label end: `left: 83%`
    - Container: `left: 44.5%`, `top: 17%`, `width: 38.5%`
    - Layout order: Dot $\rightarrow$ Line $\rightarrow$ Label
  - **FULLY SUBLIMATED**:
    - Chest target: `left: 41.5%`, `top: 31%`
    - Label start: `left: 15%`
    - Container: `left: 15%`, `top: 31%`, `width: 26.5%`
    - Layout order: Label $\rightarrow$ Line $\rightarrow$ Dot
  - **DRIFIT QUIANA FABRIC**:
    - Fabric target: `left: 54%`, `top: 56%`
    - Label end: `left: 85%`
    - Container: `left: 54%`, `top: 56%`, `width: 31%`
    - Layout order: Dot $\rightarrow$ Line $\rightarrow$ Label
  - **100% CUSTOMIZED**:
    - Bottom hem target: `left: 37%`, `top: 79%`
    - Label start: `left: 12%`
    - Container: `left: 12%`, `top: 79%`, `width: 25%`
    - Layout order: Label $\rightarrow$ Line $\rightarrow$ Dot

- Update CSS styles in `app/globals.css`:
  - Make `.label-line` height `1px` and use `flex-grow` with `background: #000` to stretch connecting lines.
  - Make `.label-dot` solid black (`background: #000; border: 2px solid #000;`) to match the reference design.
  - Ensure labels have `white-space: nowrap` and `flex-shrink: 0`.

---

## Verification

### Automated Verification
- Run `npm run build` to verify the codebase compiles successfully with TypeScript.

### Visual Verification
- Open `http://localhost:3000/` and verify:
  - The marquee banner scrolls smoothly and infinitely without text gaps.
  - All four product pointer lines connect the tags to the correct points of the jersey (neckline, chest, mid-body, bottom seam).
  - Hovering over the jersey still triggers the spotlight design reveal correctly.
