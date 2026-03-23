import React, { useState } from 'react';
import { PageHeader, Chip, SectionHeader } from '../components/UI';
import { EVENTS } from '../data/mockData';

const FILTERS = ['Upcoming', 'Baltimore', 'DC', 'Virginia', 'Online'];

function EventCard({ event }) {
  const [rsvped, setRsvped] = useState(false);

  return (
    <div className="card" style={{ marginBottom: '14px', overflow: 'hidden' }}>
      {/* Date bar */}
      <div style={{
        background: 'var(--c-bg-2)',
        borderBottom: '1px solid var(--c-border)',
        padding: '14px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '18px',
      }}>
        <div style={{ textAlign: 'center', minWidth: '42px' }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--c-green-accent)',
          }}>
            {event.month}
          </div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '32px',
            fontWeight: 700,
            color: 'var(--c-text-primary)',
            lineHeight: 1,
          }}>
            {event.day}
          </div>
        </div>
        <div>
          <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--c-text-primary)', marginBottom: '3px' }}>
            {event.name}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--c-text-secondary)' }}>
            {event.location}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '16px 20px' }}>
        <p style={{
          fontSize: '14px',
          color: 'var(--c-text-secondary)',
          lineHeight: 1.65,
          marginBottom: '14px',
        }}>
          {event.desc}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', color: 'var(--c-text-muted)' }}>
            {event.attending + (rsvped ? 1 : 0)} attending
          </span>
          <button
            className={`btn btn-sm ${rsvped ? 'btn-outline' : 'btn-primary'}`}
            onClick={() => setRsvped(!rsvped)}
          >
            {rsvped ? '✓ RSVPed' : 'RSVP'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Events() {
  const [activeFilter, setActiveFilter] = useState('Upcoming');

  const filtered = EVENTS.filter(e =>
    activeFilter === 'Upcoming' || e.category === activeFilter
  );

  return (
    <div>
      <PageHeader
        region="Events & Meetups"
        title="Muster Up"
        subtitle="Local veteran events happening across the DMV"
      />
      <div className="page">
        <div className="page-narrow">
          <div className="chip-row">
            {FILTERS.map(f => (
              <Chip key={f} label={f} active={activeFilter === f} onClick={() => setActiveFilter(f)} />
            ))}
          </div>
          <SectionHeader title={`${filtered.length} events`} action="Submit an Event" />
          {filtered.map(event => <EventCard key={event.id} event={event} />)}
        </div>
      </div>
    </div>
  );
}
