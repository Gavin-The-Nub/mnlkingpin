"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #e5e5e5', paddingTop: '60px', paddingBottom: '40px', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 0.8fr 0.8fr 1fr', gap: '48px', paddingBottom: '48px' }}>

          {/* Brand column */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <Image src="/logo-black.png" alt="MNL Kingpin" width={160} height={40} style={{ objectFit: 'contain' }} />
            </div>
            <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.7', maxWidth: '220px', marginBottom: '20px' }}>
              Premium custom sportswear from Quezon, Philippines. Founded in 2015. Trusted by teams from youth leagues to the pros.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="https://www.facebook.com/MNLKINGPINQUEZON" target="_blank" rel="noopener noreferrer"
                style={{ width: '32px', height: '32px', border: '1px solid #ddd', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#000" aria-label="Facebook">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/mnlkingpin" target="_blank" rel="noopener noreferrer"
                style={{ width: '32px', height: '32px', border: '1px solid #ddd', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#000" aria-label="Instagram">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links column */}
          <div>
            <p style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.15em', color: '#000', marginBottom: '18px', textTransform: 'uppercase' }}>Links</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Home', 'About Us', 'Customize', 'Concepts', 'Shop', 'Track Order', 'Production Status', 'Size Guide', 'Newsletter'].map((link) => (
                <li key={link}>
                  <a href={link === 'Size Guide' ? '/size-guide' : link === 'Home' ? '/' : '#'} style={{ fontSize: '12px', color: '#555', textDecoration: 'none' }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#000')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#555')}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products column */}
          <div>
            <p style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.15em', color: '#000', marginBottom: '18px', textTransform: 'uppercase' }}>Products</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Basketball Jerseys', 'Volleyball Uniforms', 'Esports Jerseys', 'Corporate Wear'].map((product) => (
                <li key={product}>
                  <a href="#" style={{ fontSize: '12px', color: '#555', textDecoration: 'none' }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#000')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#555')}>
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.15em', color: '#000', marginBottom: '18px', textTransform: 'uppercase' }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#555" style={{ marginTop: '2px', flexShrink: 0 }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span style={{ fontSize: '12px', color: '#555', lineHeight: '1.5' }}>SILANGAN MAYAO, Old Manila S Rd, Lucena City, 4301 Quezon</span>
              </div>
              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#555">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <a href="tel:09215817900" style={{ fontSize: '12px', color: '#555', textDecoration: 'none' }}>0921 581 7900</a>
              </div>
              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#555">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:mnlkingpin@gmail.com" style={{ fontSize: '12px', color: '#555', textDecoration: 'none' }}>mnlkingpin@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <p style={{ fontSize: '11px', color: '#aaa' }}>© 2026 MNL Kingpin Sportswear. All rights reserved.</p>
          <p style={{ fontSize: '11px', color: '#aaa' }}>
            Game Strong / Est. 2015 / Quezon City, PH &nbsp;·&nbsp; Developed by{' '}
            <a href="#" style={{ color: '#aaa', textDecoration: 'underline' }}>Errol Aaron Merjudio</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
