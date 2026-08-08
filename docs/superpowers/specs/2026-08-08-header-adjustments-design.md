# Specification: Header adjustments and GameStrong logo styling

## Goal
Improve the homepage layout and aesthetics by:
1. Removing the cart icon and badge.
2. Renaming the header "TRACK ORDER" button to "ORDER NOW" and removing the redundant Facebook "ORDER NOW" button at the bottom-right of the hero.
3. Making the GameStrong logo white by removing the inverted filter.
4. Making the main navigation background transparent at the top, transitioning smoothly to a dark blurred background when scrolling down.

## Proposed Changes

### Metadata relocation
- Move page metadata from `app/page.tsx` to `app/layout.tsx` to allow page.tsx to be converted into a Client Component.

### Homepage Component (`app/page.tsx`)
- Convert `app/page.tsx` to a Client Component using `"use client";`.
- Add scroll listener via `useState` and `useEffect` to toggle an `isScrolled` boolean based on `window.scrollY > 0`.
- Update `<nav>` element's styling:
  - Add transition class `transition-all duration-300` for smooth background transition.
  - Apply inline style `background: "transparent", backdropFilter: "none"` when `isScrolled` is false.
  - Apply inline style `background: "rgba(10,10,10,0.80)", backdropFilter: "blur(6px)"` when `isScrolled` is true.
- Remove the Cart icon `<li>` container completely.
- Rename "TRACK ORDER" button to "ORDER NOW" and update its `id` to `order-now-btn`.
- Remove `style={{ filter: "invert(1) brightness(10)" }}` from the GameStrong logo `Image` so it renders in its original white pixels.
- Remove the Facebook "ORDER NOW" button block located in the bottom-right corner of the hero section.

## Verification
- Verify in browser that:
  - Navigation starts transparent at the top of the page.
  - Navigation transitions smoothly to the dark blurred background when scrolling.
  - Cart icon is gone.
  - Track Order button is renamed to "ORDER NOW".
  - GameStrong logo renders in white.
  - Secondary order now button is removed.
- Run `npm run build` to verify there are no TypeScript or compilation errors.
