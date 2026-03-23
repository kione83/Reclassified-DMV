import React, { useState } from 'react';
import { PageHeader, Chip, SearchBar, SectionHeader } from '../components/UI';
import { JOBS } from '../data/mockData';

const FILTERS = ['All', 'Cleared', 'Remote', 'Fed Contractor', 'Healthcare', 'Tech'];

function JobCard({ job }) {
  return (
    <div className="card" style={{
      padding: '20px',
      marginBottom: '12px',
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-start',
    }}>
      {/* Logo */}
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: 'var(--radius)',
        background: job.logoBg,
        color: job.logoColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontSize: '12px',
        fontWeight: 700,
        flexShrink: 0,
      }}>
        {job.co}
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--c-text-primary)', marginBottom: '3px' }}>
          {job.title}
        </div>
        <div style={{ fontSize: '12px', color: 'var(--c-text-secondary)', marginBottom: '10px' }}>
          {job.company} · {job.location}
        </div>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
          {job.vetPreferred && (
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '10px',
              fontWeight: 600,
              padding: '3px 9px',
              borderRadius: '20px',
              background: 'var(--c-green-deep)',
              color: 'var(--c-green-pale)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              Vet Preferred
            </span>
          )}
          {[job.clearance, job.salary, job.type].map(b => (
            <span key={b} style={{
              fontSize: '11px',
              padding: '3px 9px',
              borderRadius: '20px',
              border: '1px solid var(--c-border)',
              color: 'var(--c-text-secondary)',
            }}>
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Apply */}
      <button className="btn btn-outline btn-sm hide-mobile">Apply</button>
    </div>
  );
}

export default function Jobs() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = JOBS.filter(j => {
    const matchFilter = activeFilter === 'All' || j.category === activeFilter;
    const matchSearch = !search ||
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.company.toLowerCase().includes(search.toLowerCase()) ||
      j.location.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div>
      <PageHeader
        region="Job Board"
        title="Careers"
        subtitle="Veteran-preferred employers across the DMV"
      />
      <div className="page">
        <div className="page-mid">
          <SearchBar
            placeholder="Search jobs, companies, clearance level..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="chip-row">
            {FILTERS.map(f => (
              <Chip key={f} label={f} active={activeFilter === f} onClick={() => setActiveFilter(f)} />
            ))}
          </div>
          <SectionHeader title={`${filtered.length} open positions`} action="Post a Job" />
          {filtered.map(job => <JobCard key={job.id} job={job} />)}
        </div>
      </div>
    </div>
  );
}
