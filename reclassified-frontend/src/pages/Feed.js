import React, { useState } from 'react';
import { PageHeader, Tag, Avatar, Chip, SearchBar, SectionHeader } from '../components/UI';
import { FEED_POSTS } from '../data/mockData';

const FILTERS = ['All', 'Army', 'Navy', 'Marines', 'Air Force', 'Coast Guard'];

function PostCard({ post }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card" style={{ padding: '20px', marginBottom: '12px' }}>
      {/* Header */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
        <Avatar initials={post.initials} colorClass={post.avatarClass} size="md" />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--c-text-primary)' }}>
            {post.name}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--c-text-muted)' }}>
            {post.meta} · {post.time}
          </div>
        </div>
        <button className="btn btn-ghost btn-sm">···</button>
      </div>

      {/* Body */}
      <p style={{
        fontSize: '14px',
        color: 'var(--c-text-primary)',
        lineHeight: 1.65,
        marginBottom: '12px',
      }}>
        {post.body}
      </p>

      {/* Tags */}
      <div style={{ marginBottom: '14px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {post.tags.map(t => <Tag key={t} type={t} />)}
      </div>

      {/* Divider */}
      <hr className="divider" style={{ margin: '0 0 12px' }} />

      {/* Actions */}
      <div style={{ display: 'flex', gap: '4px' }}>
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => setLiked(!liked)}
          style={{ color: liked ? 'var(--c-green-accent)' : 'var(--c-text-secondary)' }}
        >
          {liked ? '♥' : '♡'} {post.likes + (liked ? 1 : 0)}
        </button>
        <button className="btn btn-ghost btn-sm" style={{ color: 'var(--c-text-secondary)' }}>
          ◻ {post.comments}
        </button>
        <button className="btn btn-ghost btn-sm" style={{ color: 'var(--c-text-secondary)' }}>
          ↪ Share
        </button>
      </div>
    </div>
  );
}

export default function Feed() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = FEED_POSTS.filter(p => {
    const matchFilter = activeFilter === 'All' || p.branch === activeFilter;
    const matchSearch = !search || p.body.toLowerCase().includes(search.toLowerCase()) || p.name.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div>
      <PageHeader
        region="Baltimore · DC · Virginia"
        title="Community Feed"
        subtitle="What's happening across the DMV veteran community"
      />
      <div className="page">
        <div className="page-narrow">
          <SearchBar
            placeholder="Search posts, veterans, topics..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="chip-row">
            {FILTERS.map(f => (
              <Chip key={f} label={f} active={activeFilter === f} onClick={() => setActiveFilter(f)} />
            ))}
          </div>
          <SectionHeader title={`${filtered.length} posts`} action="New Post" />
          {filtered.map(post => <PostCard key={post.id} post={post} />)}
        </div>
      </div>
    </div>
  );
}
