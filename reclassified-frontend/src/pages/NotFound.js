import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{
      minHeight: 'calc(100vh - var(--nav-height))',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '48px 24px',
    }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(80px, 18vw, 160px)',
        fontWeight: 700,
        color: 'var(--c-green-deep)',
        lineHeight: 1,
        marginBottom: '8px',
      }}>
        404
      </div>
      <div className="display display-md" style={{ marginBottom: '12px' }}>
        Page Not Found
      </div>
      <p style={{
        fontSize: '15px',
        color: 'var(--c-text-secondary)',
        maxWidth: '360px',
        lineHeight: 1.65,
        marginBottom: '32px',
      }}>
        This page has gone AWOL. Let's get you back to the community.
      </p>
      <Link to="/" className="btn btn-primary">Back to Home Base</Link>
    </div>
  );
}
