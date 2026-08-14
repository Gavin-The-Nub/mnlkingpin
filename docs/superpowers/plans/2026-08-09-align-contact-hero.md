# Align Contact Page Hero Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align the contact page hero section height and typography to match the size guide page's hero, and use the shared Header/Footer components.

**Architecture:** Use Next.js `Image` and the shared `<Header />` and `<Footer />` components. Align elements using standard Tailwind CSS classes to match the size-guide page.

**Tech Stack:** Next.js (App Router), Tailwind CSS.

## Global Constraints
- Do not import external css fonts from within component files if we can avoid it, but preserve any local Google Font links/imports required for custom styles.
- Preserve existing interactive behaviors (form submission, quick-card links).

---

### Task 1: Refactor Contact Page Header and Hero Section

**Files:**
- Modify: `app/contact/page.tsx`

**Interfaces:**
- Consumes: `<Header />` and `<Footer />` components
- Produces: Visual hero alignment and shared headers

- [ ] **Step 1: Edit `app/contact/page.tsx` imports and hero layout**

Add imports for `Header` and `Footer`:
```tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
```

Replace the custom announcement bar, navigation overlay, and custom hero content (lines 17-245) with the aligned layout:
```tsx
    <div style={{ backgroundColor: "#fff", color: "#111", fontFamily: "Inter, sans-serif", minHeight: "100vh" }}>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/contact/contact.jpg"
          alt="Contact Us background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Contrast Gradient Overlay */}
        <div className="hero-gradient absolute inset-0 z-1" />
        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-1"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}
        />

        {/* Hero Title & Subtitle (Bottom-Left Aligned) */}
        <div className="absolute bottom-24 left-10 z-10 max-w-lg">
          <p className="text-white/70 text-[11px] tracking-[0.25em] font-semibold mb-3">GET IN TOUCH</p>
          <h1
            className="font-druk uppercase leading-none mb-6 whitespace-nowrap text-white"
            style={{ fontSize: "clamp(50px, 8vw, 130px)", letterSpacing: "-0.01em" }}
          >
            CONTACT US
          </h1>
          <p className="text-white/85 text-[14px] leading-[1.75] font-light max-w-md">
            Ready to create your team wear, request a quote, or ask about an order? Our MNL Kingpin team would love to hear from you.
          </p>
        </div>
      </section>

      {/* Font imports and custom styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=League+Gothic&family=Inter:wght@400;500;600;700&display=swap');
        
        .quick-card {
          background-color: #ffffff;
          border: 1px solid #dedede;
          padding: 25px 28px;
          display: flex;
          align-items: center;
          gap: 20px;
          text-decoration: none;
          color: #111111;
          transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
        }

        .quick-card-icon {
          width: 44px;
          height: 44px;
          border: 1px solid #111;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #111;
          transition: border-color 0.25s ease, color 0.25s ease;
        }

        .quick-card-label {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #888;
          display: block;
          transition: color 0.25s ease;
        }

        .quick-card-value {
          font-size: 14px;
          font-weight: 800;
          color: #111;
          display: block;
          margin-top: 4px;
          transition: color 0.25s ease;
        }

        .quick-card-note {
          font-size: 11px;
          color: #666;
          display: block;
          margin-top: 2px;
          transition: color 0.25s ease;
        }

        .quick-card:hover,
        .quick-card:active,
        .quick-card:focus {
          background-color: #111111 !important;
          border-color: #111111 !important;
          color: #ffffff !important;
        }

        .quick-card:hover .quick-card-icon,
        .quick-card:active .quick-card-icon,
        .quick-card:focus .quick-card-icon {
          border-color: #ffffff !important;
          color: #ffffff !important;
        }

        .quick-card:hover .quick-card-label,
        .quick-card:active .quick-card-label,
        .quick-card:focus .quick-card-label {
          color: rgba(255, 255, 255, 0.6) !important;
        }

        .quick-card:hover .quick-card-value,
        .quick-card:active .quick-card-value,
        .quick-card:focus .quick-card-value {
          color: #ffffff !important;
        }

        .quick-card:hover .quick-card-note,
        .quick-card:active .quick-card-note,
        .quick-card:focus .quick-card-note {
          color: rgba(255, 255, 255, 0.6) !important;
        }
      `}</style>
```

- [ ] **Step 2: Edit `app/contact/page.tsx` footer**

Replace the custom inline footer block (lines 618-767 in original code) with:
```tsx
      <Footer />
```

- [ ] **Step 3: Verify build and linting**

Run: `npm run build`
Expected: Successful Next.js build.

- [ ] **Step 4: Commit changes**

```bash
git add app/contact/page.tsx
git commit -m "feat: align contact page hero layout and typography, use shared components"
```
