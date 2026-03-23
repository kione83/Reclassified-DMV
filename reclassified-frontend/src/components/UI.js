import React from 'react';
import { TAG_LABELS } from '../data/mockData';

// ---- Tag ----
export function Tag({ type, children }) {
  const label = children || TAG_LABELS[type] || type;
  return <span className={`tag tag-${type}`}>{label}</span>;
}

// ---- Avatar ----
export function Avatar({ initials, colorClass = 'avatar-green', size = 'md' }) {
  return (
    <div className={`avatar avatar-${size} ${colorClass}`}>
      {initials}
    </div>
  );
}

// ---- Filter Chip ----
export function Chip({ label, active, onClick }) {
  return (
    <button
      className={`chip ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

// ---- Search Bar ----
export function SearchBar({ placeholder, value, onChange }) {
  return (
    <div className="search-bar" style={{ marginBottom: '20px' }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="7" cy="7" r="5" stroke="#4caf50" strokeWidth="1.5"/>
        <path d="M11 11L14 14" stroke="#4caf50" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <input
        type="text"
        placeholder={placeholder || 'Search...'}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

// ---- Page Header ----
export function PageHeader({ region, title, subtitle }) {
  return (
    <div className="page-header">
      <div className="container">
        {region && <div className="label" style={{ marginBottom: '8px' }}>{region}</div>}
        <h1 className="display display-lg animate-fade-up">{title}</h1>
        {subtitle && (
          <p style={{
            fontSize: '15px',
            color: 'var(--c-text-secondary)',
            marginTop: '8px',
            fontStyle: 'italic',
          }} className="animate-fade-up-delay-1">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

// ---- Section Header ----
export function SectionHeader({ title, action, onAction }) {
  return (
    <div className="section-header">
      <span className="label">{title}</span>
      {action && (
        <button
          className="btn btn-ghost btn-sm"
          onClick={onAction}
          style={{ fontSize: '11px' }}
        >
          {action}
        </button>
      )}
    </div>
  );
}

// ---- Stat Badge ----
export function StatBadge({ value, label }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '22px',
        fontWeight: 700,
        color: 'var(--c-text-primary)',
        lineHeight: 1,
      }}>
        {value}
      </div>
      <div className="label" style={{ marginTop: '4px', fontSize: '9px' }}>{label}</div>
    </div>
  );
}

// ---- Empty State ----
export function EmptyState({ icon, title, message }) {
  return (
    <div className="empty-state">
      {icon && <div style={{ fontSize: '32px', marginBottom: '12px' }}>{icon}</div>}
      <div className="display display-sm" style={{ marginBottom: '8px' }}>{title}</div>
      {message && <p>{message}</p>}
    </div>
  );
}

// ---- Loading Skeleton ----
export function Skeleton({ height = 80, borderRadius = 10 }) {
  return (
    <div style={{
      height,
      borderRadius,
      background: 'var(--c-bg-3)',
      animation: 'pulse 1.5s ease infinite',
      marginBottom: '10px',
    }} />
  );
}
