import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#4caf50" strokeWidth="1.5"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#4caf50" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Community Feed',
    body: 'Connect with veterans across Baltimore, DC, and Virginia. Share stories, resources, and opportunities.',
    link: '/feed',
    cta: 'Browse feed',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="14" rx="2" stroke="#4caf50" strokeWidth="1.5"/>
        <path d="M8 6V4M16 6V4" stroke="#4caf50" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 10h18" stroke="#4caf50" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Events & Meetups',
    body: 'Job fairs, networking nights, VA benefits workshops, and more happening right here in the DMV.',
    link: '/events',
    cta: 'See events',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#4caf50" strokeWidth="1.5"/>
        <path d="M8 12h8M8 8h8M8 16h5" stroke="#4caf50" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Job Board',
    body: 'Veteran-preferred employers in the DMV. Filter by clearance level, branch, salary, and more.',
    link: '/jobs',
    cta: 'Find jobs',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#4caf50" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Forums',
    body: 'Straight talk on transition, housing, benefits, mental health, and veteran-owned business.',
    link: '/forums',
    cta: 'Join discussion',
  },
];

const STATS = [
  { value: '4,200+', label: 'DMV Veterans' },
  { value: '142',    label: 'Open Jobs' },
  { value: '38',     label: 'Events This Month' },
  { value: '6',      label: 'Counties Covered' },
];

export default function Home() {
  return (
    <div className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-grid" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-label animate-fade-up">Baltimore · DC · Virginia</div>
          <h1 className="hero-title animate-fade-up-delay-1">
            Reclas<span className="accent">sified</span>
            <br />DMV
          </h1>
          <p className="hero-sub animate-fade-up-delay-2">
            "Reclassified. Not retired."
          </p>
          <p className="hero-body animate-fade-up-delay-3">
            The veteran community platform built for the DMV. Connect, find work,
            attend events, and get straight talk from people who've been there.
          </p>
          <div className="hero-btns animate-fade-up-delay-4">
            <Link to="/feed" className="btn btn-primary">Join the Community</Link>
            <Link to="/jobs" className="btn btn-outline">Browse Jobs</Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="stats-bar">
        <div className="container stats-inner">
          {STATS.map(({ value, label }) => (
            <div key={label} className="stat-item">
              <div className="stat-value">{value}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <div className="label" style={{ textAlign: 'center', marginBottom: '12px' }}>
            What we offer
          </div>
          <h2 className="display display-md" style={{ textAlign: 'center', marginBottom: '48px' }}>
            Everything a DMV vet needs
          </h2>
          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <div key={f.title} className={`feature-card animate-fade-up-delay-${i + 1}`}>
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-body">{f.body}</p>
                <Link to={f.link} className="feature-link">{f.cta} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div className="label" style={{ marginBottom: '12px' }}>Join Reclassified DMV</div>
          <h2 className="display display-lg">
            Your service continues.<br />
            <span className="accent">Your mission evolves.</span>
          </h2>
          <p className="cta-body">
            Built by DMV veterans, for DMV veterans. Free to join, always.
          </p>
          <div className="hero-btns">
            <Link to="/feed" className="btn btn-primary">Get Started — It's Free</Link>
            <Link to="/events" className="btn btn-outline">See Upcoming Events</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
