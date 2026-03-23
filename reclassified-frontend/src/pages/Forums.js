import React, { useState } from 'react';
import { PageHeader, Tag, Chip, SearchBar, SectionHeader } from '../components/UI';
import { FORUMS } from '../data/mockData';

const FILTERS = ['All', 'Transition', 'Benefits', 'Housing', 'Mental Health', 'Business'];

function ThreadCard({ thread }) {
  return (
    <div className="card" style={{
      padding: '18px 20px',
      marginBottom: '10px',
      cursor: 'pointer',
    }}>
      <div style={{ marginBottom: '8px' }}>
        <Tag type={thread.tag} />
        {thread.hot && (
          <span style={{
            marginLeft: '6px',
            fontFamily: 'var(--font-display)',
            fontSize: '9px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#ff7043',
            border: '1px solid rgba(255,112,67,0.3)',
            padding: '2px 7px',
            borderRadius: '20px',
          }}>
            Hot
          </span>
        )}
      </div>
      <h3 style={{
        fontSize: '14px',
        fontWeight: 600,
        color: 'var(--c-text-primary)',
        lineHeight: 1.5,
        marginBottom: '12px',
      }}>
        {thread.title}
      </h3>
      <div style={{
        display: 'flex',
        gap: '20px',
        fontSize: '11px',
        color: 'var(--c-text-dim)',
        fontFamily: 'var(--font-display)',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
      }}>
        <span>{thread.replies} replies</span>
        <span>{thread.views} views</span>
        <span>Active {thread.ago}</span>
      </div>
    </div>
  );
}

export default function Forums() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  const TAG_MAP = {
    'Transition': 'transition',
    'Benefits': 'benefits',
    'Housing': 'housing',
    'Mental Health': 'health',
    'Business': 'business',
  };

  const filtered = FORUMS.filter(t => {
    const matchFilter = activeFilter === 'All' || t.tag === TAG_MAP[activeFilter];
    const matchSearch = !search || t.title.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div>
      <PageHeader
        region="Discussion Boards"
        title="The Briefing Room"
        subtitle="Straight talk from DMV veterans — no fluff, no rank pulling"
      />
      <div className="page">
        <div className="page-narrow">
          <SearchBar
            placeholder="Search threads, topics..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="chip-row">
            {FILTERS.map(f => (
              <Chip key={f} label={f} active={activeFilter === f} onClick={() => setActiveFilter(f)} />
            ))}
          </div>
          <SectionHeader title={`${filtered.length} threads`} action="New Thread" />
          {filtered.map(thread => <ThreadCard key={thread.id} thread={thread} />)}
        </div>
      </div>
    </div>
  );
}
