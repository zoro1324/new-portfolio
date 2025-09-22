import React from 'react';

function SocialIcon({ type, href, label }) {
    const common = 'inline-flex items-center justify-center w-10 h-10 rounded-full glass-surface hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]';
    return (
        <a className={common} href={href} aria-label={label} target="_blank" rel="noreferrer noopener">
            {/* Simple inline SVGs to avoid extra deps */}
            {type === 'github' && (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5A11.5 11.5 0 0 0 .5 12.4c0 5.26 3.42 9.72 8.17 11.3.6.12.83-.26.83-.58 0-.28-.01-1.03-.02-2.02-3.32.74-4.02-1.64-4.02-1.64-.55-1.44-1.34-1.83-1.34-1.83-1.1-.77.08-.75.08-.75 1.22.09 1.86 1.28 1.86 1.28 1.08 1.9 2.83 1.35 3.52 1.03.11-.81.42-1.35.77-1.66-2.65-.31-5.44-1.36-5.44-6.06 0-1.34.47-2.43 1.24-3.28-.12-.31-.54-1.57.12-3.26 0 0 1.01-.33 3.32 1.25.96-.27 1.98-.4 3-.41 1.02 0 2.04.14 3 .41 2.3-1.58 3.31-1.25 3.31-1.25.67 1.69.25 2.95.12 3.26.77.85 1.24 1.94 1.24 3.28 0 4.72-2.79 5.74-5.45 6.05.43.37.82 1.1.82 2.23 0 1.61-.02 2.91-.02 3.31 0 .32.22.7.84.58A11.52 11.52 0 0 0 23.5 12.4 11.5 11.5 0 0 0 12 .5Z" />
                </svg>
            )}
            {type === 'linkedin' && (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 23.5h4V7.9h-4v15.6zM8.5 7.9h3.8v2.1h.1c.5-1 1.8-2.1 3.8-2.1 4.1 0 4.9 2.7 4.9 6.1v9.6h-4v-8.5c0-2 0-4.5-2.7-4.5-2.7 0-3.1 2.1-3.1 4.3v8.7h-4V7.9z" />
                </svg>
            )}
            {type === 'mail' && (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M2 5h20a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm10 8 9-6H3l9 6zm-2-1-8 5h20l-8-5-2 1-2-1z" />
                </svg>
            )}
        </a>
    );
}

function Stat({ value, label }) {
    return (
        <div className="glass-surface rounded-xl px-5 py-4 text-left">
            <div className="text-2xl font-semibold text-glow" style={{ color: 'var(--accent-primary)' }}>{value}</div>
            <div className="text-sm opacity-80">{label}</div>
        </div>
    );
}

function Chip({ children }) {
    return (
        <span className="px-3 py-1 rounded-full text-sm glass-surface border border-[var(--border-glass)]">
            {children}
        </span>
    );
}

function Home() {
    // Placeholders to be personalized
    const details = {
        name: 'Your Name',
        role: 'Frontend Developer',
        tagline: 'I build clean, performant, and accessible web apps.',
        location: 'Your City, Country',
        years: '1+',
        projects: '5+',
        resumeUrl: '#',
        email: 'you@example.com',
        socials: {
            github: 'https://github.com/your-username',
            linkedin: 'https://www.linkedin.com/in/your-username/'
        },
        stack: ['React', 'Tailwind CSS', 'JavaScript', 'Node.js']
    };

    return (
        <section id="home" className="relative z-10 pt-24 md:pt-28">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                {/* Intro */}
                <div className="text-center">
                    <p className="text-sm tracking-wide uppercase opacity-80">Welcome to my portfolio</p>
                    <h1 className="text-display text-5xl md:text-6xl mt-3 leading-tight">
                        Hi, I’m <span className="text-glow" style={{ color: 'var(--accent-primary)' }}>{details.name}</span>
                    </h1>
                    <h2 className="mt-2 text-2xl md:text-3xl font-medium opacity-90">{details.role}</h2>
                    <p className="mt-4 text-lg opacity-85 max-w-3xl mx-auto">{details.tagline}</p>
                </div>

                {/* Actions */}
                <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
                    <a
                        href={details.resumeUrl}
                        className="px-5 py-2.5 rounded-full font-semibold text-[var(--color-ink,#0f1a2a)] bg-[var(--accent-primary)] hover:opacity-90 transition-opacity"
                        target={details.resumeUrl?.startsWith('http') ? '_blank' : undefined}
                        rel={details.resumeUrl?.startsWith('http') ? 'noreferrer noopener' : undefined}
                    >
                        View Resume
                    </a>
                    <a
                        href="#footer"
                        className="px-5 py-2.5 rounded-full font-semibold glass-surface hover:opacity-90 transition-opacity"
                    >
                        Contact Me
                    </a>
                    <div className="flex items-center gap-2 ml-1">
                        <SocialIcon type="github" href={details.socials.github} label="GitHub" />
                        <SocialIcon type="linkedin" href={details.socials.linkedin} label="LinkedIn" />
                        <SocialIcon type="mail" href={`mailto:${details.email}`} label="Send email" />
                    </div>
                </div>

                {/* Quick stats */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                    <Stat value={`${details.years} yrs`} label="Experience" />
                    <Stat value={details.projects} label="Projects" />
                    <Stat value={details.location} label="Location" />
                </div>

                {/* Tech stack chips */}
                <div className="mt-8 flex flex-wrap justify-center gap-2">
                    {details.stack.map(s => (<Chip key={s}>{s}</Chip>))}
                </div>
            </div>
        </section>
    );
}

export default Home;