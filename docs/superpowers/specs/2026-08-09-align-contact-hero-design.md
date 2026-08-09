# Design Specification: Align Contact Page Hero Typography and Height

We will update the Contact page hero section to be visually and structurally aligned with the Size Guide page. This includes adopting the shared header and footer components, matching the hero container dimensions and typography styles.

## Summary of Changes

1. **Header and Footer Integration**:
   - Replace the custom, hardcoded navigation overlay and announcement bar in `app/contact/page.tsx` with the shared `<Header />` component.
   - Replace the custom inline footer in `app/contact/page.tsx` with the shared `<Footer />` component.

2. **Hero Container Height and Overlays**:
   - Change the hero section container's dimensions to `w-full h-screen` (full viewport height) to match the size guide hero.
   - Adjust gradient overlays to match the size guide design.

3. **Typography Alignment**:
   - Align the hero title "CONTACT US" with the size guide title styling (using `.font-druk` and matching font size and letter spacing).
   - Align the hero subtitle paragraph to match the text opacity, weight, and styling of the size guide hero description.
   - Position the text group inside an absolute bottom-left aligned container (`bottom-24 left-10 z-10 max-w-lg`).

## Proposed Design Details

### Spacing and Alignment

The new hero section structure in `app/contact/page.tsx` will be:
```tsx
<section className="relative w-full h-screen overflow-hidden bg-black">
  <Image
    src="/assets/contact/contact.jpg"
    alt="Contact Us background"
    fill
    priority
    className="object-cover object-center"
  />
  <div className="hero-gradient absolute inset-0 z-1" />
  <div 
    className="absolute bottom-0 left-0 right-0 h-32 z-1" 
    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} 
  />

  <div className="absolute bottom-24 left-10 z-10 max-w-lg">
    <p className="text-white/70 text-[11px] tracking-[0.25em] font-semibold mb-3">
      GET IN TOUCH
    </p>
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
```
