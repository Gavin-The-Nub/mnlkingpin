# Marquee and Product Pointers Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the text-based scrolling marquee with an infinite image-based marquee banner and reposition the jersey's four feature pointers using responsive flex percentage styling.

**Architecture:**
- Use a repeating sequence of two `marquee.png` images inside the scrolling marquee track to form a seamless infinite loop.
- Position the jersey labels and pointers using percentage-based container bounds, leveraging CSS flex-grow to stretch connection lines automatically and lock dots to specific positions of the jersey image.

**Tech Stack:** Next.js (React), CSS (Tailwind v4 with Vanilla CSS custom rules).

## Global Constraints
- Target files: `app/page.tsx`, `app/globals.css`.
- Ensure all interactive elements have unique, descriptive IDs.
- Run `npm run build` to verify there are no TypeScript or build issues after each change.

---

### Task 1: Update CSS Styles for Marquee and Pointers

**Files:**
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: None.
- Produces: CSS class definitions for flex-grow lines and solid black dots.

- [ ] **Step 1: Modify marquee and label styles in globals.css**
  Replace lines 98-115 (marquee height) and lines 144-170 (labels styling) with updated values:
  ```css
  /* globals.css styles */
  .marquee-strip {
    position: relative;
    width: 100%;
    overflow: hidden;
    background: #000;
    height: 50px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .marquee-track {
    display: flex;
    align-items: center;
    width: max-content;
    height: 50px;
    animation: marquee-scroll 28s linear infinite;
    will-change: transform;
  }
  
  .label-tag {
    background: #000;
    color: #fff;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    padding: 6px 12px;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .label-line {
    height: 1px;
    background: #000;
    flex-grow: 1;
    flex-shrink: 0;
  }

  .label-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 2px solid #000;
    background: #000;
    flex-shrink: 0;
  }
  ```

- [ ] **Step 2: Commit CSS changes**
  Run: `git add app/globals.css && git commit -m "style: update marquee and jersey labels styling in globals.css"`

---

### Task 2: Implement Image Marquee and Pointer Layout in page.tsx

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: CSS class definitions from Task 1, `public/marquee.png` image asset.
- Produces: Updated homepage component with responsive pointers and image-based marquee.

- [ ] **Step 1: Replace text-based marquee with image-based marquee**
  Modify lines 99-113 in `app/page.tsx`:
  ```tsx
  {/* Marquee Strip */}
  <div className="marquee-strip">
    <div className="marquee-track">
      <Image src="/marquee.png" alt="Marquee" width={2991} height={92} className="h-full w-auto max-w-none" priority />
      <Image src="/marquee.png" alt="Marquee" width={2991} height={92} className="h-full w-auto max-w-none" priority />
    </div>
  </div>
  ```

- [ ] **Step 2: Update feature pointers with responsive percentage positioning**
  Replace lines 150-174 in `app/page.tsx` with:
  ```tsx
  {/* Feature labels — z-10, above both image layers */}
  {/* Fully Sublimated */}
  <div className="absolute z-10 flex items-center gap-2 pointer-events-none" style={{ left: '15%', top: '31%', width: '26.5%' }}>
    <span className="label-tag">Fully Sublimated</span>
    <div className="label-line" />
    <div className="label-dot" />
  </div>

  {/* Knitted Ribbings and Neckline */}
  <div className="absolute z-10 flex items-center gap-2 pointer-events-none" style={{ left: '44.5%', top: '17%', width: '38.5%' }}>
    <div className="label-dot" />
    <div className="label-line" />
    <span className="label-tag">Knitted Ribbings and Neckline</span>
  </div>

  {/* Drifit Quiana Fabric */}
  <div className="absolute z-10 flex items-center gap-2 pointer-events-none" style={{ left: '54%', top: '56%', width: '31%' }}>
    <div className="label-dot" />
    <div className="label-line" />
    <span className="label-tag">Drifit Quiana Fabric</span>
  </div>

  {/* 100% Customized */}
  <div className="absolute z-10 flex items-center gap-2 pointer-events-none" style={{ left: '12%', top: '79%', width: '25%' }}>
    <span className="label-tag">100% Customized</span>
    <div className="label-line" />
    <div className="label-dot" />
  </div>
  ```

- [ ] **Step 3: Run production build to verify no errors**
  Run: `npm run build`
  Expected: Builds successfully with no compilation or lint errors.

- [ ] **Step 4: Commit changes**
  Run: `git add app/page.tsx && git commit -m "feat: implement image marquee and responsive percentage pointers"`

---

### Task 3: Verify Layout Visually

**Files:**
- Test: None (visual check)

- [ ] **Step 1: Check rendering in browser**
  Navigate to `http://localhost:3000/`. Scroll to check:
  - The marquee banner flows smoothly.
  - The four pointers point precisely to the correct locations of the jersey (neckline, chest, mid-body fabric, bottom hem) and stretch correctly when the window size changes.
  - Spotlight reveal functionality on hover is fully functional.
