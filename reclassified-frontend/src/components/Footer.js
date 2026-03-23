import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      background: '#040a04',
      borderTop: '1px solid var(--c-border)',
      padding: '48px 0 32px',
      marginTop: 'auto',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '40px',
          marginBottom: '40px',
        }}>
          {/* Brand col */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '22px',
              fontWeight: 700,
              color: 'var(--c-text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '6px',
            }}>
              Reclassified <span style={{ color: 'var(--c-green-accent)' }}>DMV</span>
            </div>
            <div style={{
              fontSize: '12px',
              color: 'var(--c-text-dim)',
              fontStyle: 'italic',
              marginBottom: '16px',
            }}>
              "Reclassified. Not retired."
            </div>
            <div style={{ fontSize: '12px', color: 'var(--c-text-dim)', lineHeight: 1.6 }}>
              The veteran community platform for Baltimore, DC, and Virginia.
            </div>
          </div>

          {/* Platform col */}
          <div>
            <div className="label" style={{ marginBottom: '14px' }}>Platform</div>
            {[
              { to: '/feed',   label: 'Community Feed' },
              { to: '/jobs',   label: 'Job Board' },
              { to: '/events', label: 'Events' },
              { to: '/forums', label: 'Forums' },
            ].map(({ to, label }) => (
              <Link key={to} to={to} style={{
                display: 'block',
                fontSize: '13px',
                color: 'var(--c-text-secondary)',
                marginBottom: '8px',
                transition: 'color 0.15s',
              }}>
                {label}
              </Link>
            ))}
          </div>

          {/* Resources col */}
          <div>
            <div className="label" style={{ marginBottom: '14px' }}>Resources</div>
            {[
              'VA Benefits',
              'GI Bill Guide',
              'Transition Help',
              'Veteran-Owned Biz',
              'Mental Health',
            ].map((item) => (
              <div key={item} style={{
                display: 'block',
                fontSize: '13px',
                color: 'var(--c-text-secondary)',
                marginBottom: '8px',
              }}>
                {item}
              </div>
            ))}
          </div>

          {/* Region col */}
          <div>
            <div className="label" style={{ marginBottom: '14px' }}>Region</div>
            {[
              'Baltimore, MD',
              'Washington, DC',
              'Northern Virginia',
              'Southern Maryland',
              'Annapolis, MD',
            ].map((item) => (
              <div key={item} style={{
                fontSize: '13px',
                color: 'var(--c-text-secondary)',
                marginBottom: '8px',
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--c-border)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <div style={{ fontSize: '11px', color: 'var(--c-text-dim)' }}>
            © 2026 Reclassified DMV · Built by veterans, for veterans.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy', 'Terms', 'Contact'].map((item) => (
              <span key={item} style={{
                fontSize: '11px',
                color: 'var(--c-text-dim)',
                cursor: 'pointer',
              }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
